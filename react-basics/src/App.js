import './App.css';
import DeleteUserApi from './api_fetching/fetch_api/DeleteUserApi';
import GetAllUserApi from './api_fetching/fetch_api/GetAllUsersApi';
import GetUserApi from './api_fetching/fetch_api/GetUserApi';
import Main from './error_boundary/Main';
import ReactFormHandling1 from './forms/html_vs_react_form/ReactFormHandling1';
import With_UseCallBack from './hooks/use_callback/with_use_callback/With_UseCallBack';
import Without_UseCallBack from './hooks/use_callback/without_use_callback/Without_UseCallBack';
import NavigateRoutes from './hooks/use_navigate/NavigateRoutes';
import AsDataDirectlyInAttribute from './props/passing_data_as_props/in_seperate_jsx_attributes/AsDataDirectlyInAttribute';
import AsVariableInAttribute from './props/passing_data_as_props/in_seperate_jsx_attributes/AsVariableInAttribute';
import AsSingleObjectInJsxAttribute from './props/passing_data_as_props/in_single_jsx_attribute_js_object/AsSingleObjectInJsxAttribute';

function App() {
  return (
    <div className="App">
      {/* <h1>hii how are you</h1> */}
    
    {/* <AsDataDirectlyInAttribute/>
    <AsVariableInAttribute/>
    <AsSingleObjectInJsxAttribute/> */}

      {/* <Counter1/>
      <Counter2/> */}
      
{/*   
      <Without_UseCallBack/>
      <With_UseCallBack/> */}

      {/* <GetUserApi/> */}

      {/* <GetAllUserApi/> */}
      {/* <DeleteUserApi/> */}
      {/* <NavigateRoutes/> */}
      {/* <Main/> */}
      <ReactFormHandling1/>
    </div>
  );
}

export default App;
