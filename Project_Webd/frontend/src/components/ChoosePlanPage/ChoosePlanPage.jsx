import React, { useState } from 'react';
import './ChoosePlanPage.css';
import plans from './PlanData';
import PricePlan from './PricePlan';

const ChoosePlanPage = () => {
    const [selectedPlans, setSelectedPlans] = useState([]);

    const handleSelectPlan = (id) => {
        const plan = plans.find(p => p.id === id);
        if (selectedPlans.find(p => p.id === plan.id)) {
            // If the plan is already selected, deselect it
            setSelectedPlans(selectedPlans.filter(p => p.id !== plan.id));
        } else {
            // Otherwise, add it to the selected plans
            setSelectedPlans([...selectedPlans, plan]);
        }
    };

    return (
        <div>
            <div className="header">
                <h1 className="h1-title">Choose Your Plan</h1>
                <div className="cart-icon-container">
                    <div className="cart-icon" onClick={() => setSelectedPlans([])}>
                        🛒
                        {selectedPlans.length > 0 && <span className="cart-count">{selectedPlans.length}</span>}
                    </div>
                </div>
            </div>
            {selectedPlans.length > 0 && (
                <div className="cart-details">
                    <h2>Cart Details</h2>
                    {selectedPlans.map(plan => (
                        <div key={plan.id}>
                            <p>Plan: {plan.name}</p>
                            <p>Price: {plan.price}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="plan-container">
                {plans.map(plan => (
                    <PricePlan 
                        key={plan.id} 
                        plan={plan} 
                        onSelect={handleSelectPlan} 
                        isSelected={selectedPlans.some(p => p.id === plan.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChoosePlanPage;
