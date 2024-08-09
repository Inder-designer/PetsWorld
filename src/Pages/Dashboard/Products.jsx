import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Dashboard/Table/Table";
import {
  clearErrors,
  deleteProduct,
  getAllProducts,
} from "../../Services/dashboard/actions/AdminProductAction";
import { useDispatch, useSelector } from "react-redux";
import ProductListTable from "../../components/Dashboard/Table/ProductListTable";
import TableSkeleton from "../../components/LoadingShimmers/TableSkeleton";
import { DELETE_PRODUCT_RESET } from "../../Services/dashboard/constants/productConstants";
import Loading from "../../components/Loading";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isLoading, product, error } = useSelector(
    (state) => state.adminProducts
  );
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.EditProduct
  );

  const handleDelProduct = (id) => {
    setLoading(true);
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (deleteError) {
      dispatch(clearErrors());
    }
    if (isDeleted) {
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    dispatch(getAllProducts());
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dispatch, error, deleteError, isDeleted]);

  useEffect(() => {
    if (product) {
      setData(product.products);
    }
  }, [product]);

  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <div>
      {loading && <Loading />}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center pl-4 mb-5">
          <Link to="/admin/orders" className="text-lg font-semibold">
            All Products
          </Link>
          <Link to="/admin/product/create" className="font-semibold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-sm rounded-lg">
            New Product
          </Link>
        </div>
        {data?.length > 0 ? (
          <div>
            <ProductListTable
              data={data}
              handleDelProduct={handleDelProduct}
              setProductID="setProductID"
            />
          </div>
        ) : (
          <div className="text-center">
            No Product
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
