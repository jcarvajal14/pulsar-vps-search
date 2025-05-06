import { Color } from '../../../../../constants/color';
import EditIcon from '../../../common/svgicons/EditIcon';
import { SettingCardDiv } from '../styled';
import { Header, EditPlanButton,PlanDetail, PlanInfos } from './styled';

const SupportPlanCard = () => {
  return (
    <SettingCardDiv>
      <Header>
        <h3>
          <strong>Support Plan</strong>
        </h3>
        <EditPlanButton>
        <EditIcon stroke={Color.$white} strokeWidth='1.5' />
        <span>Edit Plan</span>
      </EditPlanButton>
      </Header>
      <PlanInfos>
        <PlanDetail>
          <label>
            Current Plan
          </label>
          <label>
            None
          </label>
        </PlanDetail>
        <PlanDetail>
        <label>
            Additional Cost
          </label>
          <label>
            $ 0
          </label>
        </PlanDetail>
      </PlanInfos>
    </SettingCardDiv>
  );
};
export default SupportPlanCard;
