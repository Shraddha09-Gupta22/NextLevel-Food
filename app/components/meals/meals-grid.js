import classes from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({meal}){
    return(
        <ul className = {classes.meals}>
            {meal.map((meal) => (
                <li key = {meal.id}>
                   <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}