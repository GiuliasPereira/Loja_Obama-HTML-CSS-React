import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtoS">Produtos</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;