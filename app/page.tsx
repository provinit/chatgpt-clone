import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-20">ChatGPT </h1>
      <div className="flex space-x-4 space-y-[40px] md:space-y-0 text-center flex-wrap md:flex-nowrap overflow-auto ">
        <div>
          <div className="flex flex-col items-center justify-cente mb-0 md:mb-5 p-8 md:p-0">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-4">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is difference between a dog and a cat?"</p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-cente mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-4">
            <p className="infoText">"Change the ChatGPT Model to use"</p>
            <p className="infoText">"Messages are stored in Firebase's Firestore"</p>
            <p className="infoText">"Hot Toast notification when ChatGPT is thinking!"</p>
          </div>
        </div>


        <div>
          <div className="flex flex-col items-center justify-cente mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-4">
            <p className="infoText">"May occasionally generate incorrect information"</p>
            <p className="infoText">"May occasionally produce harmful instructions or biased content"</p>
            <p className="infoText">"Limited knowledge of world and events after 2021"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
