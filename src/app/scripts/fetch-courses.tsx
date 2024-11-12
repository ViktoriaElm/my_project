"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

let url = 'http://localhost:8000/course';

export default function CourseComponent() {
    const [courses, setCourses] = useState([{
        "id": "",
        "title": "",
        "image": "",
        "duration": "",
        "level": ""
    }]);

    useEffect(() => {
        async function fetchCourseData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error:, error');
            }
        }
        fetchCourseData();
    }, []);

    return (
        <div>
            <h1>Courses</h1>
            {
                courses.map(course => (
                    <div key={course.id}>
                        {course && course.image ? (
                            <Image
                            src={course.image}
                            width={250}
                            height={150}
                            className=''
                            alt="Background"
                        />
                        ) : (
                        <p>Loading...</p>
                    )}

                        <h3>{course.title}</h3>
                        <p>{course.duration}</p>
                        <p>{course.level}</p>
                    </div>
                ))
            }
        </div>
    )
}
