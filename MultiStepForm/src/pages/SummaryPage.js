import { Button, Divider } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageDescription from "../components/PageDescription";
import { addons, plans } from "../models/constants";
import { durationEnum } from "../models/enums";

function SummaryPage() {
  const { selectedPlan, duration, selectedAddons } = useSelector(
    (state) => state.subscription
  );

  const findDetailedAddonByTitle = (addon) => {
    return Object.values(addons).find((value) => value.title === addon);
  };

  const calculateTotal = () => {
    const selectedPlanPrice =
      duration === durationEnum.MONTHLY
        ? plans[selectedPlan.toUpperCase()].monthly
        : plans[selectedPlan.toUpperCase()].yearly;

    const totalAddonPrice =
      selectedAddons.length === 0
        ? 0
        : selectedAddons
            .map((addon) => {
              if (duration === durationEnum.MONTHLY) {
                return findDetailedAddonByTitle(addon).monthly;
              } else {
                return findDetailedAddonByTitle(addon).yearly;
              }
            })
            .reduce((acc, cur) => acc + cur);

    return selectedPlanPrice + totalAddonPrice;
  };

  return (
    <div className="summary-page page">
      <PageDescription
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="summary">
        <div className="plan">
          <div className="left-side">
            <label>{selectedPlan} </label>
            <label>({duration})</label>
            <Link to="/step-2">
              <p>Change</p>
            </Link>
          </div>
          <div className="right-side">
            <label>
              {duration === durationEnum.MONTHLY
                ? `$${plans[selectedPlan.toUpperCase()].monthly}/mo`
                : `$${plans[selectedPlan.toUpperCase()].yearly}/yr`}
            </label>
          </div>
        </div>
        {selectedAddons.length !== 0 && (
          <>
            <Divider />
            <div className="addons">
              {selectedAddons.map((addon) => {
                return (
                  <div className="addon" key={addon}>
                    <label>{addon}</label>
                    <label>
                      {duration === durationEnum.MONTHLY
                        ? `+$${findDetailedAddonByTitle(addon).monthly}/mo`
                        : `+$${findDetailedAddonByTitle(addon).yearly}/yr`}
                    </label>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="total">
        <div className="left-side">Total (per {duration.toLowerCase()})</div>
        <div className="right-side">{`+$${calculateTotal()}/mo`}</div>
      </div>

      <div className="navigation-buttons">
        <Link to="/step-3" className="go-back-button">
          <p>Go Back</p>
        </Link>

        <Link to="/confirm">
          <Button type="primary" className="confirm-button">
            Confirm
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SummaryPage;
