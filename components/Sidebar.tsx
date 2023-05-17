import Newchat from "./Newchat"

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
          <div>
            {/*NewChart*/}
            <Newchat/>
            <div>
               {/*Model Selection*/}
            </div>

             {/*Map through the CharRows*/}
          </div>
      </div>
    </div>
  )
}

export default Sidebar
