import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddProducts from "../AddProducts/AddProducts";
import AddReview from "../AddReview/AddReview";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import { useHistory } from "react-router-dom";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import MyPayment from "../MyPayment/MyPayment";
import "./Dashboard.css";
import AdminRoute from "../../Account/AdminRoute/AdminRoute";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logout, admin } = useAuth();
  const history = useHistory();
  return (
    <div className="row">
      <div className="sidebar col-md-4">
        <Link to={`${url}`} className="active">
          Dashboard
        </Link>
        <Link to={`${url}`}>Contact</Link>
        
        {
            admin? 
            <>
            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
            <Link to={`${url}/mngOrders`}>Manage Orders</Link>
            <Link to={`${url}/mngProducts`}>Manage products</Link>
            <Link to={`${url}/addProducts`}>Add Products</Link>
            </>
            :
            <>
            <Link to={`${url}/myPayment`}>my Payment</Link>
            <Link to={`${url}/myOrders`}>my Orders</Link>
            <Link to={`${url}/ratting`}>Give Rattings</Link>
            </>
        }
        
        {user?.email ? (
          <Button
            onClick={()=>logout(history)}
            style={{ width: "190px", backgroundColor: '#ff871d', border: 'none' }}
            className=""
          >
            Logout
          </Button>
        ) : (
          " "
        )}
      </div>
      <div className="col-md-8 dashboard">
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/myPayment`}>
            <MyPayment></MyPayment>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/ratting`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/mngOrders`}>
             <ManageOrders></ManageOrders>
           </AdminRoute>
          <AdminRoute path={`${path}/mngProducts`}>
             <ManageProducts></ManageProducts>
           </AdminRoute>
          <AdminRoute path={`${path}/addProducts`}>
             <AddProducts></AddProducts>
           </AdminRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
