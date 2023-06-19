import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import Loader from "../Spinner/Spinner";

const Section = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const fetchMeals = async () => {
    const response = await fetch(
      "https://food-ordering-app-17fcf-default-rtdb.firebaseio.com/meals.json"
    );

    if (!response.ok) {
      throw new Error("Something went Wrong!");
    }

    const responseData = await response.json();
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
  };

  useEffect(() => {
    fetchMeals().catch((error) => {
      setError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Section>
      <Card>
        {meals.length === 0 || error ? (
          <CenterDiv>
            <Loader />
            {error}
          </CenterDiv>
        ) : (
          <StyledUl>{mealsList}</StyledUl>
        )}
      </Card>
    </Section>
  );
};

export default AvailableMeals;
