import { DefaultEffects, makeStyles } from '@fluentui/react';
import { Button, Caption1, Card, CardHeader, CardPreview, LargeTitle, Subtitle1, tokens } from '@fluentui/react-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "36px"
  },

  card: {
    maxWidth: "100%",
    height: "fit-content"
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },
  text: { margin: "0" },
  aboutTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
    marginTop: '24px'
  },
  aboutH1Tag: {
    backgroundColor: '#ccc',
    color: '#333',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: DefaultEffects.elevation8,
    margin: '0 0 12px'
  },
  grayBackground: {
    backgroundColor: tokens.colorBrandBackground2Hover,
  },
  logoBadge: {
    padding: "5px",
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "#FFF",
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
  smallRadius: { borderRadius: tokens.borderRadiusSmall },
});

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();

  return (
    <Subtitle1 as="h4" block className={styles.title}>
      {children}
    </Subtitle1>
  );
};
function Students() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  }
  const styles = useStyles();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const getRandomName = () => {
    const names = ["John Doe", "Jane Smith", "Alice Brown", "Bob Johnson", "Charlie Wilson"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const getRandomMarks = () => Math.floor(Math.random() * 101); // Random number between 0-100
  
  const createStudent = () => {
    fetch("https://nodeapistudentmanagementbackend-hvfzfdbsfqhuena6.canadacentral-01.azurewebsites.net/students", {  // Ensure correct API URL
      method: "POST", // Specify POST method
      headers: {
        "Content-Type": "application/json", // Tell server we're sending JSON
      },
      body: JSON.stringify({   // Convert object to JSON string
        name: getRandomName(),
        age: getRandomMarks(),
        grade: "A",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log("Student Created:", data); // Debugging
        getAllStudents(); // Refresh student list after adding
      })
      .catch((error) => {
        console.error("Error creating student:", error);
        setError("Failed to create student");
      });
  };
  
  const getAllStudents = () => {
    fetch("https://nodeapistudentmanagementbackend-hvfzfdbsfqhuena6.canadacentral-01.azurewebsites.net/students") // Adjust API URL if needed
    .then((response: any) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setLoading(false);
      return response.json(); // Parse JSON
    })
    .then((data: any) => {
      setStudents(data); // Store student data in state
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching students:", error);
      setError("Failed to load students");
      setLoading(false);
    });
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className={styles.main}>
        <section className={styles.section}>
          <Card className={styles.card}>
            <LargeTitle>Students</LargeTitle>
          </Card>
        </section>

        <section>
          <Card className={styles.card} orientation="horizontal">
            <div className="ms-Grid">
              <div className="ms-Grid-row">
              <div className=''>
              <h2>Student List</h2>
              <Button className="btn btn-success" onClick={createStudent}>Create Student</Button>
              </div>
              <ul>
                {students.map((student: any) => (
                  <li key={student._id}>
                    <strong>{student.name}</strong> - Age: {student.age}, Grade: {student.grade}
                  </li>
                ))}
              </ul>
              </div>
            </div>
            
          </Card>
          <div className="ms-Grid" style={{marginTop: '40px'}}>
              <Button className="btn btn-success" onClick={back}>Back</Button>
          </div>
        </section>
      </div>

    </>
  );
}

export default Students;
