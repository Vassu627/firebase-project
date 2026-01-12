import React from 'react'
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import {db} from "../config/firebase"
import { deleteDoc, doc } from 'firebase/firestore';
import { HiOutlineUserCircle } from "react-icons/hi"
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';
const ContactCard = ({contact}) => {
  const {isOpen, onClose, onOpen} = useDisclouse();
    
  const deleteContact = async(id) => {
    try{
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch(error) {
      console.log(error);
    }
  }

  
  return (
    <>
     <div
          key={contact.id}
          className="flex items-center justify-between  bg-yellow p-2 rounded-lg mb-2"
        >
          {/* Left section */}
          <div className="flex gap-1">
            <HiOutlineUserCircle className="text-4xl text-orange" />
            <div>
              <h2 className="font-medium">{contact.name}</h2>
              <p className="text-sm text-gray-700">{contact.email}</p>
            </div>
          </div>
    
          {/* Right section */}
          <div className="flex gap-2 text-3xl">
            <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
            <IoMdTrash className="cursor-pointer text-orange" onClick={() => deleteContact(contact.id)} />
          </div>
        </div>
        <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard