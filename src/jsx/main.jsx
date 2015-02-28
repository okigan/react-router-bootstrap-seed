var React = require('react');

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , Navbar = ReactBootstrap.Navbar
    , NavItem = ReactBootstrap.NavItem
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button
    , DropdownButton = ReactBootstrap.DropdownButton
    , MenuItem = ReactBootstrap.MenuItem
    , Jumbotron = ReactBootstrap.Jumbotron
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col
    , Grid = ReactBootstrap.Grid
    ;

var ReactRouterBootstrap = require('react-router-bootstrap')
//    , NavItem = ReactRouterBootstrap.NavItem
//    , DropdownButton = ReactRouterBootstrap.DropdownButton
//    , NavItemLink = ReactRouterBootstrap.NavItemLink
//    , MenuItem = ReactRouterBootstrap.MenuItem
    , MenuItemLink = ReactRouterBootstrap.MenuItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink
    ;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar brand="React-Bootstrap">
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <DropdownButton eventKey={3} title="Dropdown">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>
                    </Nav>
                </Navbar>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <Jumbotron>
                                <h1>Hello, world!</h1>
                                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                <p>
                                    <Button bsStyle="primary">Learn more</Button>
                                </p>
                            </Jumbotron>

                            <ButtonToolbar>
                                <Button>Default</Button>
                                <Button bsStyle="primary">Primary</Button>
                                <Button bsStyle="success">Success</Button>
                                <Button bsStyle="info">Info</Button>
                                <Button bsStyle="warning">Warning</Button>
                                <Button bsStyle="danger">Danger</Button>
                                <Button bsStyle="link">Link</Button>
                            </ButtonToolbar>

                            <ButtonLink to="destination" params={{ someparam: 'params' }} query={{some: 'query param'}}>Go</ButtonLink>
                            <RouteHandler/>
                        </Col>
                    </Row>
                </Grid>

            </div>
            );
    }
});

var Destination = React.createClass({
    render: function () {
        return <div>You made it!</div>;
    }
});

var routes = (
    <Route handler={App} path="/">
        <Route name="destination" path="destination/:someparam" handler={Destination}  />
        <Route name="users" path="destination/:someparam" handler={Destination}  />
        <Route name="projects" path="destination/:someparam" handler={Destination}  />
    </Route>
    );

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});