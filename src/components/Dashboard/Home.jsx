import React from "react";

import ContentHeader from "./ContentHeader";
import ValueBox from "./ValueBox";

const ScreensDashboardHome = () => (
  <div>
    <ContentHeader title="Dashboard" subtitle="v1.0.0" />
    <section className="content">
      <div className="row">
        <ValueBox
          cols="12 4"
          bgColor="green"
          icon="wallet"
          value="R$ 10"
          label="Total de créditos"
        />
        <ValueBox
          cols="12 4"
          bgColor="red"
          icon="credit-card"
          value="R$ 10"
          label="Total de débitos"
        />
        <ValueBox
          cols="12 4"
          bgColor="blue"
          icon="funnel-dollar"
          value="R$ 0"
          label="Total consolidado"
        />
      </div>
    </section>
  </div>
);

export default ScreensDashboardHome;
