var React = require('react')

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , Navbar = ReactRouterBootstrap.NavBar
    , NavItem = ReactRouterBootstrap.NavItem
    , DropdownButton = ReactRouterBootstrap.DropdownButton
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , MenuItem = ReactRouterBootstrap.MenuItem
    , MenuItemLink = ReactRouterBootstrap.MenuItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <ButtonLink to="destination" params={{ someparam: 'params' }} query={{some: 'query param'}}>Go</ButtonLink>
                <RouteHandler/>
            </div>
            );
    }
//            <Navbar ref="header" className="navbar navbar-inverse">
//                <Nav className="navbar-left" eventKey={1}>
//                    <NavItemLink to="dashboard" eventKey={2}>Dashboard</NavItemLink>
//                    <DropdownButton eventKey={3} title="Admin">
//                        <MenuItemLink to="users" eventKey={4}>Users</MenuItemLink>
//                        <MenuItemLink to="projects" eventKey={5}>Projects</MenuItemLink>
//                    </DropdownButton>
//                </Nav>
//            </Navbar>

});

var Destination = React.createClass({
    render: function () {
        return <div>You made it!</div>;
    }
});

var routes = (
    <Route handler={App} path="/">
        <Route name="destination" path="destination/:someparam" handler={Destination}  />
    </Route>
    );

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});