
#9## DAILYRPEORT ###################################################################################
@app.route('/dailyreport',methods=['GET', 'POST'])
@cross_origin()

def dailyreport():
    cur = mysql.connection.cursor()
    cur1 = mysql.connection.cursor()
    cur2 = mysql.connection.cursor()
    cur3 = mysql.connection.cursor()
    d1 = "'" + (str(request.args.get("start"))) + "'"
    # d11 = "'" + (str(request.args.get("end"))) + "'"
    #d1 = "'2020-07-01'"
    d11 = "'2019-07-01'"
    

    #DIV NAME
    val = "DIVTAB.DIV_NAME"
    tab = "DIVTAB, SECTAB, FIELDENTRY"
    joi = "(FIELDENTRY.SEC_ID=SECTAB.SEC_ID) AND (SECTAB.DIV_ID = DIVTAB.DIV_ID)"
    job = "FIELDENTRY.JOB_ID = 1"
    cur.execute(f'''select {val} from {tab} where {joi} AND {job} and date = {d1} GROUP BY SECTAB.DIV_ID''')
    rv = cur.fetchall()

    # GL TODAY
    val1 = "SUM(FIELDENTRY.GL_VAL)"
    tab1 = "DIVTAB, SECTAB, FIELDENTRY"
    joi1 = "(FIELDENTRY.SEC_ID=SECTAB.SEC_ID) AND (SECTAB.DIV_ID = DIVTAB.DIV_ID)"
    job1 = "FIELDENTRY.JOB_ID = 1"
    cur1.execute(f'''select {val1} from {tab1} where {joi1} AND {job1} and date = {d1} GROUP BY SECTAB.DIV_ID''')
    rv1 = cur1.fetchall()

    #GL TODAY LAST YEA1R
    val2 = "SUM(FIELDENTRY.GL_VAL)"
    tab2 = "FIELDENTRY, DIVTAB, SECTAB"
    joi2 = "(FIELDENTRY.SEC_ID=SECTAB.SEC_ID) AND (SECTAB.DIV_ID = DIVTAB.DIV_ID)"
    job2 = "FIELDENTRY.JOB_ID = 1"
    cur2.execute(f'''select {val2} from {tab2} where {joi2} AND {job2} and date = {d11} GROUP BY SECTAB.DIV_ID''')
    rv2 = cur2.fetchall()

    #FINE LEAF% TODAYS GL
    val3 = "sum(FL_PER)"
    tab3 = "FLENTRY, DIVTAB"
    joi3 = "(FLENTRY.DIV_ID = DIVTAB.DIV_ID)"
    cur3.execute(f'''select {val3} from {tab3} where {joi3} and date = {d1} GROUP BY DIVTAB.DIV_ID''')
    rv3 = cur3.fetchall()

    w = [i[0] for i in rv]
    x = [i1[0] for i1 in rv1]
    y = [i2[0] for i2 in rv2]
    z = [i3[0] for i3 in rv3]
    
    q = zip(w,x,y,z)
    json_data = []
    column_headers = ['Division','GLToday','GLTodayLY','FineLeaf']

    for row in q:
        json_data.append(dict(zip(column_headers, row)))
    

#8 TEAMADE##############

    cur = mysql.connection.cursor()
    cur1 = mysql.connection.cursor()
    cur2 = mysql.connection.cursor()
    cur3 = mysql.connection.cursor()
    cur4 = mysql.connection.cursor()
    rv = []

    # d1 = "'" + (str(request.args.get("start"))) + "'"

    d0 = "'2020-03-01'"  # start date current year
    d00 = "'2019-03-01'"  # start date last year
    d11 = "'2019-07-02'"  # end date last year

    # [TM TODAY]
    val = "TMENTRY.TM_VAL "
    tab = "TMENTRY"
    cur.execute(f'''select {val} from {tab} where TM_DATE = {d1} ''')
    rv.append(cur.fetchall()[0][0])

    # [TM TODATE]
    val1 = "sum(TMENTRY.TM_VAL)"
    tab1 = "TMENTRY"
    cur1.execute(f'''select {val1} from {tab1} where TM_DATE >= {d0} AND TM_DATE <= {d1} ''')
    rv.append(cur1.fetchall()[0][0])

    # [TM TODATE LAST YEAR]
    val2 = "sum(TMENTRY.TM_VAL)"
    tab2 = "TMENTRY"
    cur2.execute(f'''select {val2} from {tab2} where TM_DATE >= {d00} AND TM_DATE <= {d11} ''')
    rv.append(cur2.fetchall()[0][0])

    # [RECOVERY % TODAY
    val3 = " ROUND(SUM(FIELDENTRY.GL_VAL)/SUM(TMENTRY.TM_VAL),4) * 100 "
    tab3 = "TMENTRY , FIELDENTRY"
    joi3 = "(TMENTRY.TM_DATE = FIELDENTRY.DATE) and (TMENTRY.TM_DATE="
    cur3.execute(f'''select {val3} from {tab3} where {joi3}{d1})''')
    rv.append(cur3.fetchall()[0][0])

    # [RECOVERY % TO DATE
    val4 = " ROUND(SUM(FIELDENTRY.GL_VAL)/SUM(TMENTRY.TM_VAL),4) * 100 "
    tab4 = 'TMENTRY , FIELDENTRY'
    joi4 = "(TMENTRY.TM_DATE = FIELDENTRY.DATE) and (TMENTRY.TM_DATE>="
    cur4.execute(f'''select {val4} from {tab4} where {joi4}{d0}) and (TMENTRY.TM_DATE<={d1})''')
    rv.append(cur4.fetchall()[0][0])

    def sids_converter(o):
        if isinstance(o, datetime.date):
            return str(o.year) + str("/") + str(o.month) + str("/") + str(o.day)

    column_headers =  ['TMToday', 'TMTodate', 'TMTodateLY', 'RecoveryToday', 'RecoveryTodate']
    json_data1 = []
    json_data1.append(dict(zip(column_headers, rv)))
    
##########MANDAYS########

#5

    cur = mysql.connection.cursor()
    #d1 = "'" + (str(request.args.get("start"))) + "'"
    #d2 = "'" + (str(request.args.get("end"))) + "'"
    #d1 = "'2020-07-01'"
    

    con = "JOBTAB.JOB_NAME"
    val = "SUM(FIELDENTRY.MND_VAL)"
    tab = "FIELDENTRY,JOBTAB"
    joi = "FIELDENTRY.JOB_ID=JOBTAB.JOB_ID"
    cur.execute(f'''select {con} , {val} from {tab} where {joi} and date >={d1} group by FIELDENTRY.JOB_ID''')
    row_headers = ['Job_Name', 'Mandays']

    rv = cur.fetchall()
    json_data2 = []

    def sids_converter(o):
        if isinstance(o, datetime.date):
                return str(o.year) + str("/") + str(o.month) + str("/") + str(o.day)

    for result in rv:
        json_data2.append(dict(zip(row_headers, result)))
    

################PLUCKDAILY
#3

    cur = mysql.connection.cursor()
    #d1 = "'2020-07-01'"
    #d1 = "'" + (str(request.args.get("start"))) + "'"

    con = "fieldentry.date, DIVTAB.DIV_NAME, SECTAB.SEC_NAME,SQUTAB.SQU_NAME"
    val = "FIELDENTRY.MND_VAL, FIELDENTRY.GL_VAL, FIELDENTRY.AREA_VAL"
    fom = "ROUND((GL_VAL/MND_VAL),2), ROUND((GL_VAL/AREA_VAL),2),ROUND((MND_VAL/AREA_VAL),2),fieldentry.pluck_int"
    con2 = "SECTAB.SEC_PRUNE , SECTAB.SEC_JAT"
    tab = "FIELDENTRY,SQUTAB,JOBTAB,SECTAB,DIVTAB"
    joi = "FIELDENTRY.SQU_ID = SQUTAB.SQU_ID AND FIELDENTRY.JOB_ID=JOBTAB.JOB_ID AND FIELDENTRY.SEC_ID=SECTAB.SEC_ID AND DIVTAB.DIV_ID=SECTAB.DIV_ID"
    job = "(FIELDENTRY.JOB_ID = 1 )"
    cur.execute(f'''select {con} , {val} , {fom} , {con2} from {tab} where {joi} and date ={d1} and {job}''')

    row_headers = ['Date', 'Division','Section_Name', 'Squad_Name', 'Mandays', 'Greenleaf', 'AreaCovered', 'GlMnd', 'GlHa', 'MndHa','PluckInterval''Prune','Jat']
    rv = cur.fetchall()
    json_data3 = []


    def sids_converter(o):
            if isinstance(o, datetime.date):
                  return str(o.year) + str("/") + str(o.month) + str("/") + str(o.day)

    for result in rv:
            json_data3.append(dict(zip(row_headers , result)))



################
#CULT DAILY


    cur = mysql.connection.cursor()
    #d1 = "'2020-07-01'"
    #d1 = "'" + (str(request.args.get("start"))) + "'"

    con = "FIELDENTRY.DATE, JOBTAB.JOB_NAME,DIVTAB.DIV_NAME, SECTAB.SEC_NAME, SQUTAB.SQU_NAME"
    val = "MND_VAL, AREA_VAL"
    fom = "ROUND((MND_VAL/AREA_VAL),2)"   
    tab = "FIELDENTRY,SQUTAB,JOBTAB,SECTAB,DIVTAB"
    joi = "FIELDENTRY.SQU_ID = SQUTAB.SQU_ID AND FIELDENTRY.JOB_ID=JOBTAB.JOB_ID AND FIELDENTRY.SEC_ID=SECTAB.SEC_ID AND DIVTAB.DIV_ID=SECTAB.DIV_ID"
    job = "(FIELDENTRY.JOB_ID = 2 or FIELDENTRY.JOB_ID = 3 or FIELDENTRY.JOB_ID = 4)"
    cur.execute(f'''select {con} , {val} , {fom} from {tab} where {joi} and date ={d1} and {job}''')
    rv = cur.fetchall()

    row_headers = ['Date', 'Job_Name','Division','Section_Name', 'Squad_Name', 'Mandays', 'AreaCovered', 'MndArea' ]
    json_data4 = []

    def sids_converter(o):
        if isinstance(o, datetime.date):
                return str(o.year) + str("/") + str(o.month) + str("/") + str(o.day)

    for result in rv:
        json_data4.append(dict(zip(row_headers , result)))
    


######################
#GRADE%
#10##

    cur = mysql.connection.cursor()
      # d1 = "'" + (str(request.args.get("start"))) + "'"
      # d2 = "'" + (str(request.args.get("end"))) + "'"
      #d1 = "'2020-07-01'"
    d2 = "'2020-07-03'"

      #SUM-ALLGRADES-DATERANGE
    cur.execute(f"SELECT SUM(SORTENTRY.SORT_KG) FROM SORTENTRY WHERE date >={d1} and date <={d2} ")
    rv = cur.fetchall()

      #SUM-ALLGRADES-DATE
    cur.execute(f"SELECT SUM(SORTENTRY.SORT_KG) FROM SORTENTRY WHERE date ={d1} ")
    rv3 = cur.fetchall()

      #SUM-PERGRADE-DATERANGE
    cur.execute(f"SELECT SUM(SORTENTRY.SORT_KG) FROM SORTENTRY, TEAGRADETAB WHERE SORTENTRY.TEAGRADE_ID = TEAGRADETAB.TEAGRADE_ID and date >={d1} and date <={d2} group by TEAGRADETAB.TEAGRADE_NAME ")
    rv1 = cur.fetchall()

      #PERGRADE-DATE
    cur.execute(f"SELECT SUM(SORTENTRY.SORT_KG) FROM SORTENTRY, TEAGRADETAB WHERE SORTENTRY.TEAGRADE_ID = TEAGRADETAB.TEAGRADE_ID and date ={d1} group by TEAGRADETAB.TEAGRADE_NAME ")
    rv4 = cur.fetchall()      

      #GRADE-NAME
    cur.execute(f"SELECT TEAGRADETAB.TEAGRADE_NAME FROM SORTENTRY, TEAGRADETAB WHERE SORTENTRY.TEAGRADE_ID = TEAGRADETAB.TEAGRADE_ID and date >={d1} and date <={d2} group by TEAGRADETAB.TEAGRADE_NAME ")
    rv2 = cur.fetchall()

    x = [s[0] for s in rv]
    xx = [s[0] for s in rv3]
    y = [i[0] for i in rv1]
    yy = [i[0] for i in rv4]
    w = [str(u[0]) for u in rv2]

    z = []
    for number in y:
          z.append((round((number / x[0]),2)*100))

    zz = []
    for number in yy:
          zz.append((round((number / x[0]),2)*100))

    zzz = zip(w,zz,z)

    json_data5 = []    
    column_headers = ['Grade','PercentToday','PercentTodate']

    for row in zzz:
          json_data5.append(dict(zip(column_headers,row)))
    

    ############
    #6
    cur = mysql.connection.cursor()
    #d1 = "'" + (str(request.args.get("start"))) + "'"
    #d1 = "'2020-07-01'"

    con = " MACHINETAB.MACH_NAME"
    fom = " sum(FUELENTRY.FUEL_VAL), sum(TM_VAL), ROUND((SUM(TM_VAL)/sum(FUELENTRY.FUEL_VAL)),2)"
    tab = "FUELENTRY, MACHINETAB, FUELTAB, TMENTRY"
    joi = "FUELENTRY.FUEL_ID = FUELTAB.FUEL_ID AND FUELENTRY.MACH_ID = MACHINETAB.MACH_ID AND TMENTRY.TM_DATE = FUELENTRY.DATE"
    cur.execute(f'''select {con} , {fom}  from {tab} where {joi} and date = {d1} group by MACHINETAB.MACH_NAME''')
    rv = cur.fetchall()

    row_headers = ['Machine', 'FuelUsed' , 'TM', 'TMFuel']
    json_data6 = []

    def sids_converter(o):
        if isinstance(o, datetime.date):
                return str(o.year) + str("/") + str(o.month) + str("/") + str(o.day)

    for row in rv:
        json_data6.append(dict(zip(row_headers,row)))


    json_final = {}
    json_final['Greenleaf'] = json_data
    json_final['TeaMade'] = json_data1
    json_final['Mandays'] = json_data2
    json_final['Plucking'] = json_data3
    json_final['Cultivation'] = json_data4
    json_final['GradePer'] = json_data5
    json_final['FuelReport'] = json_data6
    return json.dumps(json_final,default=sids_converter)