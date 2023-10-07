import { useState } from "react"
import BasicDetails from "../components/BasicDetails"
import FileUpload from "../components/FileUploadComponent"
import DropDown from "../components/MultiSelectDropdown"


function UserDetails() {
    const [form, setForm] = useState<number>(0)
  return (
    <>
    {form === 0 && <BasicDetails setForm={setForm} />}
    {form === 1 && <FileUpload setForm={setForm} />}
    {form === 2 && <DropDown setForm={setForm} />}
    <div className="w-full flex justify-around absolute bottom-10 left-0 right-0 px-80">
        <div className={`w-24 h-1 ${form == 0?"bg-blue-500":"bg-gray-200"} rounded`}></div>
        <div className={`w-24 h-1 ${form == 1?"bg-blue-500":"bg-gray-200"} rounded`}></div>
        <div className={`w-24 h-1 ${form == 2?"bg-blue-500":"bg-gray-200"} rounded`}></div>
    </div>
    </>
  )
}

export default UserDetails 