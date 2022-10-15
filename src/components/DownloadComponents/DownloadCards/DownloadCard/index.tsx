import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import classnames from 'classnames';
import styles from './index.module.scss';

interface Props {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  download: string;
  fileName: string;
  selected: boolean;
  onSelect: (name: string) => void;
}

const DownloadCard = ({
  name,
  icon: Icon,
  label,
  download,
  fileName,
  selected,
  onSelect,
}: Props): JSX.Element => {
  const handleSelectCard = (): void => onSelect(name);
  const classNames = classnames(styles.downloadCard, {
    [styles.downloadCardActive]: selected,
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelectCard();
    }
  };

  return (
    <li
      className={classNames}
      id={`download-card-${name}`}
      key={name}
      onClick={handleSelectCard}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-label={`${label} ${fileName}`}
      aria-current={selected}
    >
      <div className={styles.top}>
        <Icon className={styles.image} />

        {selected && (
          <a className={styles.link} href={download} aria-label="Download">
            <GetAppIcon />
          </a>
        )}
      </div>
      <p className={styles.label}>{label}</p>
      <p className={styles.filename}>{fileName}</p>
    </li>
  );
};

export default DownloadCard;
