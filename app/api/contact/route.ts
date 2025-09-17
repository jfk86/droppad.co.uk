
import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const CONTACTS_FILE = join(process.cwd(), 'data', 'contacts.json')

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = join(process.cwd(), 'data')
  try {
    if (!existsSync(dataDir)) {
      require('fs').mkdirSync(dataDir, { recursive: true })
    }
  } catch (error) {
    console.error('Error creating data directory:', error)
  }
}

// Read existing contacts
function readContacts() {
  try {
    if (existsSync(CONTACTS_FILE)) {
      const data = readFileSync(CONTACTS_FILE, 'utf8')
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error('Error reading contacts:', error)
    return []
  }
}

// Save contacts
function saveContacts(contacts: any[]) {
  try {
    ensureDataDir()
    writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2))
  } catch (error) {
    console.error('Error saving contacts:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, postcode, projectType, message } = body

    // Validate required fields
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      )
    }

    // Create contact entry
    const contact = {
      id: Date.now(),
      name: name || '',
      email: email || '',
      phone: phone || '',
      postcode: postcode || '',
      projectType: projectType || '',
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Save to file
    const contacts = readContacts()
    contacts.push(contact)
    saveContacts(contacts)

    // Log for debugging
    console.log('New contact submission:', contact)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: contact.id 
      }, 
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to submit contact form' 
      }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = readContacts()
    
    return NextResponse.json(contacts, { status: 200 })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to fetch contacts' 
      }, 
      { status: 500 }
    )
  }
}
