import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'alexnderfogal.me',
    href: 'https://github.com/afogal1',
  },
  {
    social: 'email',
    link: 'alex.r.fogal@gmail@gmail.com',
    href: 'mailto:alex.r.fogal@gmail.com',
  },
  {
    social: 'github',
    link: 'afogal1',
    href: 'https://github.com/afogal1',
  },
  {
    social: 'linkedin',
    link: 'alexanderfogal',
    href: 'https://www.linkedin.com/in/alexander-fogal-3b9652178/',
  },
  {
    social: 'twitter',
    link: 'afogal',
    href: 'https://twitter.com',
  },
  {
    social: 'instagram',
    link: 'afogal1',
    href: 'https://www.instagram.com/afogal1',
  },
  {
    social: 'code wars',
    link: 'afogal1',
    href: 'https://www.codewars.com/users/afogal1',
  },
  {
    social: 'telegram',
    link: 'afogal',
    href: 'https://telegram.org',
  },
  {
    social: 'codepen',
    link: 'afogal1',
    href: 'https://codepen.io',
  },
  {
    social: 'codesandbox',
    link: 'afogal1',
    href: 'https://codesandbox.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
