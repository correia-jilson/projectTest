import React from 'react';
import Paypal from '../PayPal/PayPal';

const PricePlan = ({ plan, onSelect, isSelected }) => {
    return (
        <div className={`plan-card ${isSelected ? 'selected' : ''}`}>
            <h2 className="plan-title">{plan.name} ({plan.value})</h2>
            <ul className="plan-features">
                {plan.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            <button className="plan-button" onClick={() => onSelect(plan.id , plan.price)}>
                Select
            </button>
            
        </div>
        
    );
};

export default PricePlan;