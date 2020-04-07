# Anti-COVID19 Clicker Game

## About This Game

In the late 2019, a disease was identified in Wuhan, the capital of Hubei, China, and has since spread globally, resulting in the 2019-2020 coronavirus pandemic.

Fortunately, a vaccine that cures the disease (“Anti-COVID19”) has been developed by a group of developers from UCLA WD Bootcamp Jan 2020, called { props.teamname }.

However, they were too lazy to make the README, so you must use their product in order to save the world from the disease.

Anti-COVID19 is a clicker game, where you fight against a growing number of COVID19 infection.


## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>.
#

## Game Rule

When you click on a clicker, you will be able to cure people. There is a 1.5 second cooldown on every click. For each person cured, you will receive some funds.

You can spend your money to:
  1. upgrade your clicker button to make more vaccines each click.

  2. buy a facility that will help you fight the disease, by producing some
      vaccines per certain amount of time, or reducing the growth rate of disease, etc.

  3. upgrade your facilities to have better effect.

  4. unlock some special upgrades that will be available when your clicker / facilities reach certain levels.

### Winning condition: 
* Cure all infected people
### Losing condition: 
* Number of Infected reaches 1 biilion
* death reaches 7.8 billion

#

## List of Facilities

1. Pharmacy: Cures some amount of people every 5 seconds, and generate profit ($5 per cure)

2. Laboratory: Cures some amount of people every 10 seconds, and generate profit ($3 per cure)

3. Hospital: Reduces the death rate (death from infection)

4. Drive-thru: Reduces the infection spread rate

#

## Upgrades
### Level-ups:

* When you level up your clicker, pharmacy, or laboratory, the number of cures per click or per cooldowns will increase

* When you level up your hospital (up to 3 levels), 

### Special Upgrades:

* Every few levels of Clicker, Pharmacy, and Laboratory, you will be able to unlock some special upgrades, that will boost your cure rate greatly.


