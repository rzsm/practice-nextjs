import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

// <li> is outer and <Card> is the inner one
// One specific important html point about this is <li>s should be rendered directly inside the <ul>
function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id)
    // Techniqually we could use <Link href={'/' + props.id} />
    // Just to learn navigate programatically here by using function not component
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          {/* brower recognize address tag 
            and offers the user the address that has been entered 
            recently on ather form by user 
            so one of benefits: UX improvement*/}
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
