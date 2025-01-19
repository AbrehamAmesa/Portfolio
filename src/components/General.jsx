import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js

function General() {
  // Chart Data
  const data = {
    labels: ["JavaScript", "React", "Node.js", "MongoDB", "Laravel"], // Added Laravel to the skills list
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: [95, 92, 93, 91, 96], // All skills set to above 90
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 99, 132, 0.6)", // Added color for Laravel
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)", // Added border color for Laravel
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Maximum proficiency level
      },
    },
  };

  // return (
  //   <section className="container py-5">
  //     <div className="row">
  //       {/* About Me Section */}
  //       <div className="col-md-8">
  //         <h2 className="text-primary mb-3">About Me</h2>
  //         <p className="lead">
  //           I am a dedicated and passionate software developer with a strong focus on building innovative and efficient solutions.
  //           With a solid foundation in modern web technologies, I enjoy creating applications that solve real-world problems and deliver great user experiences.
  //           I’m always eager to learn, grow, and collaborate on exciting projects.
  //         </p>
  //       </div>

  //       {/* Skills Section with Bar Chart */}
  //       <div className="col-md-4">
  //         <h2 className="text-primary mb-3">Skills</h2>
  //         <Bar data={data} options={options} />
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default General;
