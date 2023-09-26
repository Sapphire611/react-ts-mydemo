import Bar from '@/components/Bar';
// import StackedAreaChart from '@/components/StackedAreaChart';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[82, 60, 85]}
        title="三大框架满意度"
      />

      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[85, 60, 95]}
        title="三大框架使用度"
      />
      
      {/* <StackedAreaChart /> */}
    </div>
  );
};

export default Home;
