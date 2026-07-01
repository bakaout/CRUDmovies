import {useEffect, useState} from 'react'
//import { FiTrash } from 'react-icons/fi'
import { api } from './services/api'




export default function App() {

  useEffect(() => {
    loadCustomers()
  }, [])


  async function loadCustomers() {
    const response = await api.get("/customers")
    console.log(response)
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className = "my-10 w-full md:max-w-2xl">
        <h1 className = "text-4xl font-medium text-white">Movies</h1>

        <form className="flex flex-col my-6">
          <label className="font-medium text-white">Name:</label>
          <input type="text" placeholder="write the name of the movie" className="w-full mb-5 p-2 rounded border-white border-1 text-white"/>

          
          <label className="font-medium text-white">Genre:</label>
          <input type="text" placeholder="write the genre of the movie" className="w-full mb-5 p-2 rounded border-white border-1 text-white"/>

          <input type="submit" value="cadastrar" className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium text-white"></input>
        </form>

        <section className="flex flex-col">
          <article className ="w-full relative bg-white rounded p-2">

            <p><span className="font-medium">Name:</span> how trayning your dragon</p>
            <p><span className="font-medium">Genre:</span> how trayning your dragon</p>
            <p><span className="font-medium">Nota:</span> how trayning your dragon</p>

            <button className="text-black bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 top-8">🗑️
            </button>

          </article>
        </section>
      </main>
    </div>
  );
}
//ESTUDAR SOBBRE VITE
//ESTUDAR SOBRE TAILWIND

