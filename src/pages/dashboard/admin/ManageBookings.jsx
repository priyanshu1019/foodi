import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
const ManageBookings = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments/all");
      return res.data;
    },
  });
  console.log(orders);
  const handleConfirm = async (item) => {
    // console.log(item);
    axiosSecure.patch(`/payments/${item._id}`).then((res) => {
      Swal.fire({
        title: "Good job!",
        text: "Order Confirmed!",
        icon: "success",
      });
      refetch();
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Orders</h5>
        <h5>Total Orders: {orders.length}</h5>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Status</th>
                <th>Confirm Order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* body */}
              {orders.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>$ {item.price}</td>
                  <td>
                    {item.status === "confirmed" ? (
                      <span className="text-green">{item.status}</span>
                    ) : (
                      <span>{item.status}</span>
                    )}
                  </td>
                  <td className="text-center">
                    {item.status === "confirmed" ? (
                      "done"
                    ) : (
                      <button
                        onClick={() => handleConfirm(item)}
                        className="btn btn-xs text-white bg-green"
                      >
                        {" "}
                        <GiConfirmed />{" "}
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button className="btn btn-xs text-white bg-orange-500">
                      {" "}
                      <FaTrashAlt />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
