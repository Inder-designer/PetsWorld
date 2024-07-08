import React, { useEffect, useState } from "react";
import EditAddressModal from "../Modals/EditAddressModal";
import AddressModal from "../Modals/AddressModal";
import RemoveAddress from "../Modals/RemoveAddress";
import { Add, DeleteOutlineOutlined, Edit } from "@mui/icons-material";
import { getAddress } from "../../actions/addressAction";
import { useDispatch, useSelector } from "react-redux";

const ManageAddrs = ({setDefaultAddress}) => {
  const [allAddresses, setAllAddresses] = useState([]);
  const [addressModal, setAddressModal] = useState(false);
  const [edAddressModal, setEdAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [removeModal, setRemoveModal] = useState(false);
  const [addressId, setAddressId] = useState("");
  const dispatch = useDispatch();
  const { userAddresses } = useSelector ((state) => state.address.address);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  useEffect(() => {
    if (userAddresses && userAddresses.addresses) {
      const defaultAddr = userAddresses.addresses.find((e) => e.isDefault);
      const otherAddrs = userAddresses.addresses;
      setDefaultAddress(defaultAddr);
      setAllAddresses(otherAddrs);
    }
  }, [userAddresses]);

  return (
    <div className=" bg-[#f6f6f6] rounded-lg mt-6">
      <div className="border-2 rounded-t-md px-5 py-2 border-[#9f9f9f36] flex justify-between items-center">
        <h6 className="text-lg font-semibold">Manage Addresses</h6>
        <button
          onClick={() => setAddressModal(true)}
          className="flex items-center text-white bgGradient focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5"
        >
          Add Address <Add className="!text-lg" />
        </button>
      </div>
      <div className="pb-5 pt-2 flex flex-col items-center justify-center h-full">
        {allAddresses.length > 0 ? (
          <table className="w-full !text-left">
            <thead className="py-2 border-b border-[#8e8e8e72]">
              <tr>
                <th className="text-sm py-2 font-medium px-2 pl-5">Name</th>
                <th className="text-sm py-2 font-medium px-2">
                  Street Address
                </th>
                <th className="text-sm py-2 font-medium px-2">Type</th>
                <th className="text-sm py-2 font-medium px-2">City</th>
                <th className="text-sm py-2 font-medium px-2">State</th>
                <th className="text-sm py-2 font-medium px-2">Pincode</th>
                <th className="text-sm py-2 font-medium px-2">India</th>
                <th className="text-sm py-2 font-medium px-2">Phone</th>
                <th className="text-sm py-2 font-medium px-2 pr-5">Action</th>
              </tr>
            </thead>
            <tbody className="!text-xs">
              {allAddresses.map((address, index) => (
                <tr key={index} className="border-b border-[#9f9f9f36]">
                  <td className="text-xs py-2 px-2 pl-5">
                    {address.isDefault && (
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1.5"></span>
                    )}
                    {address.name}
                  </td>
                  <td className="text-xs py-2 px-2 max-w-[170px]">
                    {address.streetAddress}
                  </td>
                  <td className="text-xs py-2 px-2">{address.addressType}</td>
                  <td className="text-xs py-2 px-2">{address.city}</td>
                  <td className="text-xs py-2 px-2">{address.state}</td>
                  <td className="text-xs py-2 px-2">{address.pincode}</td>
                  <td className="text-xs py-2 px-2">India</td>
                  <td className="text-xs py-2 px-2">{address.mobile}</td>
                  <td className="text-xs py-2 px-2 pr-5">
                    <button
                      className="text-blue-600 font-medium rounded-lg 2.5 mr-3"
                      onClick={() => {
                        setEdAddressModal(true);
                        setEditAddress(address);
                      }}
                    >
                      <Edit className="!text-lg" />
                    </button>
                    <button
                      className="text-red-600 font-medium rounded-lg 2.5"
                      onClick={() => {
                        setRemoveModal(true);
                        setAddressId(address._id);
                      }}
                    >
                      <DeleteOutlineOutlined className="!text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no address entries in your account.</p>
        )}
      </div>
      <EditAddressModal
        openModal={edAddressModal}
        setOpenModal={setEdAddressModal}
        address={editAddress}
      />
      <AddressModal openModal={addressModal} setOpenModal={setAddressModal} />
      <RemoveAddress
        openModal={removeModal}
        setOpenModal={setRemoveModal}
        id={addressId}
      />
    </div>
  );
};

export default ManageAddrs;
