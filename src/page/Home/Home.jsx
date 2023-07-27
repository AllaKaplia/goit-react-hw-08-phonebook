import photoHero from '../../img/phone-number.png';
import HomeIcon from '@mui/icons-material/Home';
import { BoxHome, HeroHome, MainImg, TitleHome, Text, List } from './Home.styled';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Home = () => {
    return(
        <BoxHome>
            <TitleHome>Welcome to your personal contact inbox! <HomeIcon sx={{ fontSize: 40}} /> </TitleHome>
            <HeroHome>
                <MainImg src={photoHero} alt="Phone book" width={400} />
                <div><Text>This place is specifically created for storing your contacts that no longer fit in your notebook. You can create a convenient list here with no limitations on the number. How to use the application:</Text>
                    <List>
                        <li>1. Register in the system.  <HowToRegIcon /> </li>
                        <li>2. Log in / Authenticate. <LoginIcon /> </li>
                        <li>3. Go to the 'Contacts' page. <AssuredWorkloadIcon /> </li>
                        <li>4. Create your list by entering the name and phone number. <EditNoteIcon /> </li>
                        <li>5. You can delete unnecessary contacts. <PersonRemoveIcon /> </li>
                        <li>6. Use the form for convenient search. <PersonSearchIcon /> </li>
                    </List>
                    <Text>And remember: this is your personal contact list. Only you have access to it. We prioritize the security of your personal data!</Text>
                </div>
            </HeroHome>
        </BoxHome>
    )
}

export default Home;