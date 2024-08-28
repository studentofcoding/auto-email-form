import Head from 'next/head'
import LeadForm from '../components/LeadForm'
import ContactList from '../components/ContactList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>n8n-airtable with auto-email demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="block content-center mb-6">
              <h1 className="text-2xl font-semibold">n8n-airtable with auto-email demo</h1>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  )
}