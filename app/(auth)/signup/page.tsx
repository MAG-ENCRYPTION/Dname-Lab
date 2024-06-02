export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bienvenue sur DNAME Profitez de votre connexion fluide</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Veuillez remplir les champs suivants</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="noms">Noms <span className="text-red-600">*</span></label>
                  <input id="noms" type="text" className="form-input w-full text-gray-300" placeholder="Noms" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="prénoms">Prénoms <span className="text-red-600">*</span></label>
                  <input id="prénoms" type="text" className="form-input w-full text-gray-300" placeholder="Prénoms" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Mot de passe <span className="text-red-600">*</span></label>
                  <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="mot de passe (au moins 10 caractères)" required />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                J'accepte d'être contacté si le besoin se présente <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">S'inscrire</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Utilisez vous déjà LOCALNAMELAB? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Se connecter</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
