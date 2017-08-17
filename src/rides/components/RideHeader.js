import React from "react";
import { Link } from "react-router";
import { FormattedNumber } from "react-intl";

import Hero from "./Hero";
import Timestamp from "./Timestamp";

import styles from "../styles/RideHeader";

const RideHeader = ({ name, start_date, end_date, currency, fundraising_total, chapterName }) => (
  <header className={styles.header}>
    <Hero>
      <div className={styles.main}>
        <div className={styles.headerDates}>
          <Timestamp value={start_date} format="D MMM" itemProp="startDate" /> to <Timestamp value={end_date} format="D MMM YYYY" itemProp="endDate" />
        </div>
        <div className={styles.headerTitle}>
          <h1 itemProp="name">{name}</h1>
        </div>
        <div className={styles.headerChapter}>
          <h3>Run by the <Link to={`/chapters/${chapterName.toLowerCase()}`} >{chapterName}</Link> chapter</h3>
        </div>
      </div>

      <div className="content">
        <h2>We've raised <FormattedNumber style="currency" currency={currency} value={fundraising_total} maximumFractionDigits={0} minimumFractionDigits={0} />!</h2>
      </div>
    </Hero>
  </header>
);

export default RideHeader;
