import React from 'react';
import { Layout} from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout.js';
import Introduction from './Introduction';
import CAT from './CallToAction';
import ExampleEssay from './Example_Essay';
import HomeBody from './Homebody';

const MinhLayout = ({ head, body, footer }) => {
    return (
      <>
        <Layout>
            <div>{head}</div>
            <section 
              style={{padding: "1.5rem",
                borderBottom: "3px solid black",
              }}
            >
                <Introduction></Introduction>
            </section>

            <CAT/>
            <section>
              <ExampleEssay/>
            </section> 
            <section>{footer}</section>
        </Layout>
      </>
    );
  };  
  
  export default MinhLayout;