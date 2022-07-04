import type { NextPage } from "next";
import Head from "next/head";

import CreateUserForm from "../../components/CreateUserForm";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ventura Labas - Criar Usuário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CreateUserForm />
    </div>
  );
};

export default Home;
