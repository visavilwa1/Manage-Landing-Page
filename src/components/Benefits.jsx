import Benefit from './Benefit';
import styles from './Benefits.module.css'

function Benefits() {
  return <div className={styles.benefits}>
    <div className={styles.downBg}></div>
    <div>
    <h2>What&apos;s different about Manage?</h2>
    <p className={styles.benefitsDesc}> Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
    </div>

<div className={styles.benefitsData}>
    <Benefit number='1' title='Track company-wide progress' > See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</Benefit>
    <Benefit number='2' title='Advanced built-in reports' > Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</Benefit>
    <Benefit number='3' title='Everything you need in one place' >Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</Benefit>
    </div>
  </div>;
}

export default Benefits;
