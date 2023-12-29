import logo from './logo.svg';
import './App.css';
import Message from './Components/01_FunctionalComponents/Message';
import Hello from './Components/01_FunctionalComponents/Hello';
import Greet from './Components/02_ClassComponents/Greet';
import Product from './Components/03_Props/Product';
import Employee from './Components/03_Props/Employee';
import StateDemo from './Components/04_State/StateDemo';
import StateDemo1 from './Components/04_State/StateDemo1';
import DestructDemo1 from './Components/05_Destructuring/DestructDemo1';
import DestructDemo2 from './Components/05_Destructuring/DestructDemo2';
import DestructDemo3 from './Components/05_Destructuring/DestructDemo3';
import EventBinding1 from './Components/06_EventBindings/EventBinding1';
import EventBinding2 from './Components/06_EventBindings/EventBinding2';
import EventBinding3 from './Components/06_EventBindings/EventBinding3';
import EventBinding4 from './Components/06_EventBindings/EventBinding4';
import ParentComponent from './Components/07_PassingMethodsAsProps/ParentComponent';
import CRender1 from './Components/08_ConditionalRendering/CRender1';
import CRender2 from './Components/08_ConditionalRendering/CRender2';
import CRender3 from './Components/08_ConditionalRendering/CRender3';
import CRender4 from './Components/08_ConditionalRendering/CRender4';
import Array1 from './Components/09_Map/Array1';
import Array2 from './Components/09_Map/Array2';
import CSSDemo1 from './Components/10_CSSStyles/CSSDemo1';
import BasicForm from './Components/11_BasicFormHandling/BasicForm';
import Form from './Components/11_BasicFormHandling/Form';
import ComponentA from './Components/12_LifeCycleHooks/ComponentA';
import Table from './Components/13_Fragments/Table';
import RegularComponent from './Components/14_PureComponents/RegularComponent';
import PureComponentDemo from './Components/14_PureComponents/PureComponentDemo';
import MParent from './Components/15_MemoComponents/MParent';
import RefDemo from './Components/16_Refs/RefDemo';
import FRParent from './Components/16_Refs/FRParent';
import PortalsDemoComponent from './Components/17_Portals/PortalsDemoComponent';
import ProductComponent from './Components/18_ErrorHandling/ProductComponent';
import ErrorHandler from './Components/18_ErrorHandling/ErrorHandler';

function App() {
  return (
    <div>
      {/* <Message/>
      <hr/>
      <Hello/>
      <hr/>
      <Greet/> */}
      {/* <Product id="1" name="Iphone 15" price="78900">
        Category:Electronics
      </Product>

      <hr/>

      <Employee id="10852" name="John" designation="Developer">
        Location:Hyderbad
      </Employee> */}

      {/* <StateDemo/> */}
      {/* <StateDemo1/> */}

      {/* <DestructDemo1 id="2" name="User2"/> */}
      {/* <DestructDemo2 id="2" name="User2"/> */}
      {/* <DestructDemo3/> */}

      {/* <EventBinding1/> */}
      {/* <EventBinding2/> */}
      {/* <EventBinding3/> */}
      {/* <EventBinding4/> */}
      {/* <ParentComponent/> */}
      {/* <CRender1/> */}
      {/* <CRender2/> */}
      {/* <CRender3/> */}
      {/* <CRender4/> */}
      {/* <Array1/> */}
      {/* <Array2/> */}
      {/* <CSSDemo1/> */}
      {/* <BasicForm/> */}
      {/* <Form/> */}
      {/* <ComponentA/> */}
      {/* <Table/> */}
      {/* <RegularComponent/>
      <PureComponentDemo/> */}
      {/* <MParent/> */}
      {/* <RefDemo/> */}
      {/* <FRParent/> */}
      {/* <PortalsDemoComponent/> */}

<ErrorHandler> 
    <ProductComponent name="Iphone 13 Mini" category="Electronics"/>
</ErrorHandler>
  <ProductComponent name="Samsung S23 FE" category="Electronics"/>
<ErrorHandler> 
  <ProductComponent name="Dell Latitude E5269" category="Electronics"/> 
</ErrorHandler>
<ErrorHandler> 
  <ProductComponent name="Swift DZire" category="Automobiles"/>
</ErrorHandler>

 </div>
  );
}

export default App;
