import Form from "./compenents/Form";
import FormRow from "./compenents/FormRow";
import Input from "./compenents/Input";


function App() {
  const url = "https://www.cyrilrabat.fr/test.php"
  const method = "post"
  


    return (
      <>
        <h1>Formulaire d'inscription</h1>
        
          <Form method={method} url={url}>
            <FormRow>
              <Input label="Email" name="inmputEmail" width="4" defaultValue="" type="email" autofocus={true}/>
              <Input label="Telephone" name="inmputTel" width="4" defaultValue="" type="tel" autofocus={false}/>
            </FormRow>
          </Form>
        
      </>
    );
  
}


export default App;
