
**USER FAJTÁK**

1. Admin (Oli és én)
2. Munkáltatók (employer)
3. Szolgáltatók (hrProvider)

**MODULOK**

1. Homepage 
    - login
    - regisztráció
2. Menu
3. Dashboard ?
4. Workspace ?
5. employerForm
6. hrProviderForm
7. Admin dashboard

**BACKEND**

- Levélküldő modul/api
- Előfizetés vizsgálat (cron)

**ADAT STRUKTÚRÁK**

- KÉRDÉS: Van különbség a kétféle user között?

1. User
2. employersRequestForOffers
3. hrProvidersPreferences
4. hrProvidersOffer

**SZOLGÁLTATÓ JOGOSULTSÁG TÍPUSOK ÉS SZŰRŐK**

1. Ingyenes                           => can see dumb version of RFOs, gets email notifications
2. Lejárt ingyenes                    => can see that there are RFOs, no emails
3. Előfizetéses                       => can see dumb versions of RFOs
4. Előfizetéses + ajánlatért fizetett => can see the full version? (miért Medium)
