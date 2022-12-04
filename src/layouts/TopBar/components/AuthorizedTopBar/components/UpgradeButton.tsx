import { StyledUpgradeLink, UpgradeButtonBox } from "src/layouts/TopBar/style";

export const UpgradeButton = () => {
  return (
    <UpgradeButtonBox title="Upgrade to Premium">
      <StyledUpgradeLink to="/premium" target="_blank">
        Upgrade
      </StyledUpgradeLink>
    </UpgradeButtonBox>
  );
};
