import NavBar from '../components/navbar';
import List from '../components/list';

export default () => {
  const data = [
    'SIMPLE TOOLS',
    'SIMPLE CLOUD DEPLOYMENT',
    'COMMON SENSE DEFAULTS',
    'LIGHTNING PERFORMANCE BY DEFAULT',
    'GLOBAL DISTROBUTION BY DEFAULT',
    'AUTOMATIC SSL ENCRYPTION',
    'ZERO CONFIG FRAMEWORK SUPPORT',
    'SIMPLE CUSTOM DOMAIN MANAGEMENT',
    'SUPPORT FOR MANY POPULAR INTEGRATIONS',
    'FILE BASED ROUTING',
    'NO NEED TO IMPORT REACT',
  ];

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Hello VOLT Systems!</h1>
        <h2>Lunch and Learn</h2>
        <h3 className="primary">04-03-2020</h3>
        <a href="https://github.com/KevinBrack/vercel-lunch" target="blank">
          SOURCE
        </a>
        <p>Vercel (Formerly ZEIT) speeds up development with</p>
        {data.length && <List data={data} />}
      </div>
    </>
  );
};
