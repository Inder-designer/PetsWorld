import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAttributes } from "../../Services/dashboard/actions/AttributeActions";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import AttributesTable from "../../components/Dashboard/Table/AttributesTable";
import AddAttribute from "../../components/Dashboard/Modals/AddAttribute";

const Attributes = () => {
  const [openModal, setOpenModal] = useState(false);
  const [attributesData, setAttributesData] = useState([]);
  const dispatch = useDispatch();
  const { error, isLoading, attributes } = useSelector(
    (state) => state.attributes
  );

  useEffect(() => {
    dispatch(getAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (attributes) {
      setAttributesData(attributes.attributes);
    }
  }, [attributes]);
  
  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="">
      <div className="w-full">
        <div className="bg-white rounded-lg">
          <div className="mb-5 px-4 pt-4 flex justify-between">
            <h6 className="text-lg font-semibold">Attributes</h6>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4" onClick={() => setOpenModal(true)}>Add Attributes</button>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <AttributesTable data={attributesData ? attributesData : []}/>
          </div>
        </div>
      </div>
      <AddAttribute openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
};

export default Attributes;
