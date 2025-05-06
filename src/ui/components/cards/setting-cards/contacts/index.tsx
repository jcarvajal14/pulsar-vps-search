import { Color } from '../../../../../constants/color';
import InputComponent from '../../../common/input/input';
import PlusRoundedIcon from '../../../common/svgicons/PlusRoundedIcon';
import SaveButtonIcon from '../../../common/svgicons/SavebButtonIcon';
import { SettingCardDiv } from '../styled';
import {
  Header,
  ContactsInfo,
  AdditionalContacts,
  SaveChangesButton,
} from './styled';

const ContactsCard = () => {
  return (
    <SettingCardDiv>
      <Header>
        <h3>
          <strong>Contacts</strong>
        </h3>
      </Header>
      <p>
        Contacts to send billing information to if the primary is unavailable.
      </p>
      <ContactsInfo>
        <InputComponent inputPlaceholder='First name' />
        <InputComponent inputPlaceholder='Last name' />
        <InputComponent inputPlaceholder='+1 (555) 000-0000' />
        <InputComponent inputPlaceholder='custom@gmail.com' />
      </ContactsInfo>
      <AdditionalContacts>
        <PlusRoundedIcon stroke={Color.$white} />
        <label>
          <strong>Addition Contacts</strong>
        </label>
      </AdditionalContacts>
      <SaveChangesButton className='button-primary'>
        <SaveButtonIcon stroke={Color.$white} strokeWidth='2' />
        <span>Save Changes</span>
      </SaveChangesButton>
    </SettingCardDiv>
  );
};
export default ContactsCard;
