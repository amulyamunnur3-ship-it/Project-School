import Employee from "./Employee";

function App() {
  return (
    <div>
      <h1>Employee Profile Cards</h1>

      <Employee 
        name="Ramesh"
        id="EMP101"
        department="AIML"
        designation="Assistant Professor"
        salary="₹55,000"
      />

      <Employee 
        name="Kavya"
        id="EMP102"
        department="CSE"
        designation="Associate Professor"
        salary="₹62,000"
      />

      <Employee 
        name="Arjun"
        id="EMP103"
        department="ECE"
        designation="Professor"
        salary="₹70,000"
      />

      <Employee 
        name="Sneha"
        id="EMP104"
        department="IT"
        designation="Lecturer"
        salary="₹45,000"
      />
    </div>
  );
}

export default App;