import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface formStateProps {
    userName: string,
    email: string,
    password: string,
    phoneNumber: string | number,
    addressLineOne: string,
    addressLineTwo: string,
    city: string,
    state: string,
    pincode: string,
    country: string,
}

type MyFunctionType = (num:number) => void;

interface basicDetailsProps {
    setForm: MyFunctionType
}

const BasicDetails:React.FC<basicDetailsProps> =({setForm}) => {
    const Navigate = useNavigate();
    const [emailerror, setEmailerror] = useState<boolean>(false)
    const [passworderror, setPassworderror] = useState<boolean>(false);
    const [formData, setFormData] = useState<formStateProps>({
        userName: '',
        email: '',
        password: '',
        phoneNumber: '',
        addressLineOne: '',
        addressLineTwo: '',
        city: '',
        state: '',
        pincode: '',
        country: ''
    });

    const nextFunct = () => {
        setForm(1);
    };

    return (
        <>
            <div className="w-full ">
            <p className="text-2xl font-bold mb-4">Basic Details</p>
                <form className="bg-white rounded px-8 pt-6 pb-1 mb-1 flex w-full justify-between">
                    <div className="pr-20">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Name
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.userName} onChange={(e: any) => setFormData({ ...formData, userName: e.target.value })} className="shadow appearance-none border mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Phone Number
                            </label>
                            <input value={formData?.phoneNumber} onChange={(e: any) => setFormData({ ...formData, phoneNumber: e.target.value })} className={`shadow appearance-none border mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Email
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.email} onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="email" />
                            {emailerror ? <p className="text-red-500 text-xs italic">Please choose a correct email.</p> : ''}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Address line one
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.addressLineOne} onChange={(e: any) => setFormData({ ...formData, addressLineOne: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Street address" />
                        </div>
                        <div className="mb-1">
                            <label className="block text-gray-700 text-sm font-bold mb-1 text-left" >
                                Address line two
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.addressLineTwo} onChange={(e: any) => setFormData({ ...formData, addressLineTwo: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Street address" />
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                City
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.city} onChange={(e: any) => setFormData({ ...formData, city: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="city" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                State
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.state} onChange={(e: any) => setFormData({ ...formData, state: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="State" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Pincode
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.pincode} onChange={(e: any) => setFormData({ ...formData, pincode: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="number" placeholder="Pincode" />
                        </div>
                        <div className="mb-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                                Country
                            </label>
                            <input onClick={() => setEmailerror(false)} value={formData?.country} onChange={(e: any) => setFormData({ ...formData, country: e.target.value })} className={`shadow appearance-none border ${!emailerror ? "border" : "border-red-500"} mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Country" />
                        </div>
                    </div>
                </form>
                <div className="flex items-center justify-around">
                    <button onClick={() => Navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Cancel
                    </button>

                    {/* <button onClick={nextFunct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Previous
                    </button> */}

                    <button onClick={nextFunct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Next
                    </button>
                </div>
            </div>
        </>
    )

}

export default BasicDetails;