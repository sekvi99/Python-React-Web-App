import React, {useState, useEffect} from "react";
import { User } from "../types";
import httpClient from "../httpClient";
import { SidebarProps } from "../interfaces/sidebar.interface";
import LandingSection from "../components/LandingSection/landingSection";
import StockMarket from "../components/Charts/stockMarketDashboard";
import CurrencyDashboard from "../components/Charts/ccurrencyChartDashboard";
import { TabButton, TabSection } from "./pagesElements/landingPageTabs";
import Layout from "../components/Layout/layout";

enum Tab {
  CurrencyRatesCharts,
  StockMarketCharts,
}

const LandingPage: React.FC<SidebarProps> = () => {
    const [user, setUser] = useState<User | null>(null);
    const [activeTab, setActiveTab] = useState(Tab.CurrencyRatesCharts);

    const handleTabChange = (tab: Tab): void => {
      setActiveTab(tab);
    };
  
    useEffect(() => {
      (async () => {
        try {
          const resp = await httpClient.get("//localhost:5000/@me");
          setUser(resp.data);
        } catch (error) {
          console.log("Not authenticated");
        }
      })();
    }, []);

    return (
      <Layout>
        <div>
          {user != null ? (
            <div>
              <div>
              <TabSection>
              <h2>Logged in</h2>
              <h3>Hello: {user.email}</h3>
                <TabButton
                  onClick={() => handleTabChange(Tab.CurrencyRatesCharts)}
                  isActive={activeTab === Tab.CurrencyRatesCharts}
                >
                  Currency Rates Charts
                </TabButton>
                <TabButton
                  onClick={() => handleTabChange(Tab.StockMarketCharts)}
                  isActive={activeTab === Tab.StockMarketCharts}
                >
                  Stock Market Charts
                </TabButton>
              </TabSection>

              {activeTab === Tab.CurrencyRatesCharts && (
                <div>
                  <h2>Currency Rates Charts</h2>
                  <CurrencyDashboard symbol="EUR"/>
                  <CurrencyDashboard symbol="USD"/>
                  <CurrencyDashboard symbol="GBP"/>
                </div>
              )}

              {activeTab === Tab.StockMarketCharts && (
                <div>
                  <h2>Currency Rates Charts</h2>
                  <StockMarket symbol="IBM" />
                  <StockMarket symbol="TSCO.LON" />
                  <StockMarket symbol="SHOP.TRT" />
                  <StockMarket symbol="DAI.DEX" />
                  <StockMarket symbol="RELIANCE.BSE" />
                </div>
              )}
              
              </div>
            </div>
          ) : (
            <>
            <LandingSection />
            </>
          )}
        </div>
      </Layout>
      );
    };

export default LandingPage;