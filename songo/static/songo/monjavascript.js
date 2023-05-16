let message = document.querySelector(".message")
let scoreJoueur2 = document.querySelector(".scorej2");
let scoreJoueur1 = document.querySelector(".scorej1");

let caseJoueur2 = [...document.getElementsByClassName("case")];

let caseJoueur1 = [...document.getElementsByClassName("caseor")];

let adversaire1 = document.querySelector(".adversaire1");
let adversaire2 = document.querySelector(".adversaire2");
let le_connecte = document.querySelector(".le_connecte");

let lespointsinteractifs = [...document.getElementsByClassName("ptn")];
let lesscoreinteractifs = [...document.getElementsByClassName("scr")];



$(document).ready(function(){
    setInterval(function(){
      $.ajax({
          type: 'GET',
          url : "/getelements",
          success: function(response){
              // console.log(response.lesPoints[]);

            
                  caseJoueur1[0].textContent = response.lesPoints[0].point1
                  caseJoueur1[1].textContent = response.lesPoints[0].point2
                  caseJoueur1[2].textContent = response.lesPoints[0].point3
                  caseJoueur1[3].textContent = response.lesPoints[0].point4
                  caseJoueur1[4].textContent = response.lesPoints[0].point5
                  caseJoueur1[5].textContent = response.lesPoints[0].point6
                  caseJoueur1[6].textContent = response.lesPoints[0].point7

                  caseJoueur2[0].textContent = response.lesPoints[0].point8
                  caseJoueur2[1].textContent = response.lesPoints[0].point9
                  caseJoueur2[2].textContent = response.lesPoints[0].point10
                  caseJoueur2[3].textContent = response.lesPoints[0].point11
                  caseJoueur2[4].textContent = response.lesPoints[0].point12
                  caseJoueur2[5].textContent = response.lesPoints[0].point13
                  caseJoueur2[6].textContent = response.lesPoints[0].point14
                
                  scoreJoueur1.textContent = response.lesScores[0].scorej1
                  scoreJoueur2.textContent = response.lesScores[0].scorej2

              
          },
          error: function(response){
              alert('An error occured')
          }
      });
    },3000);
  })


//*************************************************************************************************************************************** */

const FaireUnePrise = (e) => {
  message.style.visibility = "hidden";
  let choix = e.target;
  let choix2 = choix.id;
  taille = 7;
  
  let valeurprise = choix.textContent;

  if(choix2 == "case1" || choix2 == "case2" || choix2 == "case3" || choix2 == "case4" || choix2 == "case5" || choix2 == "case6" || choix2 == "case7")
  {
    if(choix2 != "case7")
  {
      choix.textContent = 0;

      if(valeurprise != 0){ 
          
          semerJoueur1(caseJoueur1, caseJoueur2, valeurprise, taille, choix2);
          Remplisseur()
  
          TestFinJeu();
      }
  }
  else 
  {
    
      if(valeurprise != 1)
      {
          choix.textContent = 0;

          if(valeurprise != 0){       
              semerJoueur1(caseJoueur1, caseJoueur2, valeurprise, taille, choix2);
              Remplisseur()
             
              TestFinJeu();
          }
      }

  }

  }

  else if(choix2 == "case8" || choix2 == "case9" || choix2 == "case10" || choix2 == "case11" || choix2 == "case12" || choix2 == "case13" || choix2 == "case14")
  {
    if(choix2 != "case8")
  {
      choix.textContent = 0;

      if(valeurprise != 0){ 
          
          semerJoueur2(caseJoueur2, caseJoueur1, valeurprise, taille, choix2);
          Remplisseur()
         
          TestFinJeu();
      }
  }
  else 
  {
    
      if(valeurprise != 1)
      {
          choix.textContent = 0;

          if(valeurprise != 0){       
              semerJoueur2(caseJoueur2, caseJoueur1, valeurprise, taille, choix2);
              Remplisseur()
            
              TestFinJeu();
          }
      }

  }
  }
  
};




//************************************************************************************************************************************** */



//tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
const TestFinJeu = () => {
   
  scorej1 = parseInt(scoreJoueur1.textContent);
  scorej2 = parseInt(scoreJoueur2.textContent);
  if(scorej1 >= 35)
  {
     
      message.textContent = adversaire1.textContent+"A GAGNÉ LA PARTIE !";
      message.style.visibility = 'visible';
    
      caseJoueur1.forEach((btn) => {
          btn.removeEventListener('click', FaireUnePrise);
      });
      caseJoueur2.forEach((btn) => {
        btn.removeEventListener('click', FaireUnePrise);
    });
  }
  else if(scorej2 >= 35)
  {
     
      message.textContent = adversaire2.textContent+"A GAGNÉ LA PARTIE !";
      message.style.visibility = 'visible';
      
      caseJoueur1.forEach((btn) => {
          btn.removeEventListener('click', FaireUnePrise);
      });
      caseJoueur2.forEach((btn) => {
        btn.removeEventListener('click', FaireUnePrise);
    });
  }

  else
  {
    somme_graine_joueur2 = 0;
      somme_graine_joueur1 = 0;

      for(let i = 0; i < 7; i++)
      {
        somme_graine_joueur1 += parseInt(caseJoueur1[i].textContent);
          somme_graine_joueur2 += parseInt(caseJoueur2[i].textContent);
      }

      if((somme_graine_joueur1 + somme_graine_joueur2) < 10)
      {
        point_final_joueur1 = scorej1;
        point_final_joueur2 = scorej2;

          for(let i = 0; i < 7; i++)
          {
              point_final_joueur1 += parseInt(caseJoueur1[i].textContent);
              point_final_joueur2 += parseInt(caseJoueur2[i].textContent);
          }   

          if(point_final_joueur1 > point_final_joueur2)
          {
              
              message.textContent = adversaire1.textContent+"A GAGNÉ LA PARTIE !";
              message.style.visibility = 'visible';
             
              caseJoueur1.forEach((btn) => {
                  btn.removeEventListener('click', FaireUnePrise);
              });
              caseJoueur2.forEach((btn) => {
                btn.removeEventListener('click', FaireUnePrise);
            });   
          }

          else
          {
              
              message.textContent = adversaire2.textContent+"A GAGNÉ LA PARTIE !";
              message.style.visibility = 'visible';
 
              caseJoueur1.forEach((btn) => {
                  btn.removeEventListener('click', FaireUnePrise);
              });
              caseJoueur2.forEach((btn) => {
                btn.removeEventListener('click', FaireUnePrise);
            });  
          }
      }
  }

};
//tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
const Remplisseur = () => {
  for(let i = 0; i < 7; i++)
  {
    console.log(lespointsinteractifs[i].value)
    lespointsinteractifs[i].value = caseJoueur1[i].textContent
  }

  for(let i = 7; i < 14; i++)
  {
    lespointsinteractifs[i].value = caseJoueur2[i-7].textContent
  }
  lesscoreinteractifs[0].value = scoreJoueur1.textContent
  lesscoreinteractifs[1].value = scoreJoueur2.textContent
}


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function semerJoueur1(casejoueur1, casejoueur2, valeurPrise, taille, id_case_active)
{
    let j = 0;

    for(let i = 0; i < taille; i++)
    {
        if(casejoueur1[i].id == id_case_active)
        {
            j = i;
        }
    }

    

    for(let i = j+1; i < taille; i++)
    {
        if(valeurPrise > 0)
        {

          casejoueur1[i].textContent = parseInt(casejoueur1[i].textContent) + 1
            valeurPrise--;
        }
    }

    if(valeurPrise > 0)
    {
        let position_finale = 0;
        for(let i = taille-1; i >= 0; i--)
        { 
            if(valeurPrise > 0)
            {
                valeurPrise--;
                casejoueur2[i].textContent = parseInt(casejoueur2[i].textContent) + 1
                position_finale = i;
            }
            
        }
        
        if(valeurPrise == 0)
        {
            let somme_graine_adversaire = 0;
            for(let i = 0; i < 7; i++)
            {
                somme_graine_adversaire += parseInt(casejoueur2[i].textContent);
            }
   
            if((casejoueur2[position_finale].textContent == 2) || (casejoueur2[position_finale].textContent == 3) || (casejoueur2[position_finale].textContent == 4))
            {
                if(somme_graine_adversaire >= 2 && somme_graine_adversaire <= 4)
                {
                    console.log("pas de prise");
                }
                else
                {
                  scoreJoueur1.textContent = parseInt(scoreJoueur1.textContent) + parseInt(casejoueur2[position_finale].textContent);
                  casejoueur2[position_finale].textContent = 0;
                    if((position_finale + 1) < taille)
                    {
                        if((casejoueur2[position_finale+1].textContent == 2) || (casejoueur2[position_finale+1].textContent == 3) || (casejoueur2[position_finale+1].textContent == 4))
                        {
                          scoreJoueur1.textContent = parseInt(scoreJoueur1.textContent) + parseInt(casejoueur2[position_finale+1].textContent);
                          casejoueur2[position_finale+1].textContent = 0;
                        }
                    }
                }

    
            }
        }

   
    }
    if(valeurPrise > 0)
    {
        for(let i = 0; i < taille; i++)
        {
            if(valeurPrise > 0)
            {
                valeurPrise--;
                casejoueur1[i].textContent = parseInt(casejoueur1[i].textContent) + 1
            }
           
        }
    }



    if(valeurPrise > 0)
    {
        let position_finale = 0;
        for(let i = taille-1; i >= 0; i--)
        { 
            if(valeurPrise > 0)
            {
                valeurPrise--;
                casejoueur2[i].textContent = parseInt(casejoueur2[i].textContent) + 1
                position_finale = i;
            }
            
        }
        
        if(valeurPrise == 0)
        {
            let somme_graine_adversaire = 0;
            for(let i = 0; i < 7; i++)
            {
                somme_graine_adversaire += parseInt(casejoueur2[i].textContent);
            }

            if((casejoueur2[position_finale].textContent == 2) || (casejoueur2[position_finale].textContent == 3) || (casejoueur2[position_finale].textContent == 4))
            {
                if(somme_graine_adversaire >= 2 && somme_graine_adversaire <= 4)
                {
                    console.log("pas de prise");
                }
                else
                {
                  scoreJoueur1.textContent = parseInt(scoreJoueur1.textContent) + parseInt(casejoueur2[position_finale].textContent);
                  casejoueur2[position_finale].textContent = 0;
                    if((position_finale + 1) < taille)
                    {
                        if((casejoueur2[position_finale+1].textContent == 2) || (casejoueur2[position_finale+1].textContent == 3) || (casejoueur2[position_finale+1].textContent == 4))
                        {
                          scoreJoueur1.textContent = parseInt(scoreJoueur1.textContent) + parseInt(casejoueur2[position_finale+1].textContent);
                          casejoueur2[position_finale+1].textContent = 0;
                        }
                    }
                }
    
            }
        }

   
    }
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function semerJoueur2(casejoueur2, casejoueur1, valeurPrise, taille, id_case_active)
{

    if(valeurPrise > 0)
    {
        let j = 0;

        for(let i = taille-1; i >=0; i--)
        {
            if(casejoueur2[i].id == id_case_active)
            {
                j = i;
                casejoueur2[i].textContent = 0;
            }
        }
    
        for(let i = j-1; i >= 0; i--)
        {
            if(valeurPrise > 0)
            {
    
              casejoueur2[i].textContent = parseInt(casejoueur2[i].textContent) + 1
                valeurPrise--;
            }
            
        }
    
        if(valeurPrise > 0)
        {
            let position_finale = 0;
            for(let i = 0; i < taille; i++)
            {
                if(valeurPrise > 0)
                {
                    valeurPrise--;
                    casejoueur1[i].textContent = parseInt(casejoueur1[i].textContent) + 1;
                    position_finale = i;
                }
            }
            if(valeurPrise == 0)
            {
                let somme_graine_adversaire = 0;
                for(let i = 0; i < 7; i++)
                {
                    somme_graine_adversaire += parseInt(casejoueur1[i].textContent);
                }
                if((casejoueur1[position_finale].textContent == 2) || (casejoueur1[position_finale].textContent == 3) || (casejoueur1[position_finale].textContent == 4))
                {
                    if(somme_graine_adversaire >= 2 && somme_graine_adversaire <= 4)
                    {
                        console.log("pas de prise");
                    }
                    else
                    {
                      scoreJoueur2.textContent = parseInt(scoreJoueur2.textContent) + parseInt(casejoueur1[position_finale].textContent);
                      casejoueur1[position_finale].textContent = 0;
                        if((position_finale - 1) >= 0)
                        {
                            if((casejoueur1[position_finale-1].textContent == 2) || (casejoueur1[position_finale-1].textContent == 3) || (casejoueur1[position_finale-1].textContent == 4))
                            {
                              scoreJoueur2.textContent = parseInt(scoreJoueur2.textContent) + parseInt(casejoueur1[position_finale-1].textContent);
                              casejoueur1[position_finale-1].textContent = 0;
                            }
                        }
                    }

        
                }
            }
        }
    
        if(valeurPrise > 0)
        {
            for(let i = taille-1; i >= 0; i--)
            {
                if(valeurPrise > 0)
                {
                    valeurPrise--;
                    casejoueur2[i].textContent = parseInt(casejoueur2[i].textContent) + 1
                }
            }
        }



        if(valeurPrise > 0)
        {
            let position_finale = 0;
            for(let i = 0; i < taille; i++)
            {
                if(valeurPrise > 0)
                {
                    valeurPrise--;
                    casejoueur1[i].textContent = parseInt(casejoueur1[i].textContent) + 1;
                    position_finale = i;
                }
            }
            if(valeurPrise == 0)
            {
                let somme_graine_adversaire = 0;
                for(let i = 0; i < 7; i++)
                {
                    somme_graine_adversaire += parseInt(casejoueur1[i].textContent);
                }

                if((casejoueur1[position_finale].textContent == 2) || (casejoueur1[position_finale].textContent == 3) || (casejoueur1[position_finale].textContent == 4))
                {
                 if(somme_graine_adversaire >= 2 && somme_graine_adversaire <= 4)
                    {
                        console.log("pas de prise");
                    }
                    else
                    {
                      scoreJoueur2.textContent = parseInt(scoreJoueur2.textContent) + parseInt(casejoueur1[position_finale].textContent);
                      casejoueur1[position_finale].textContent = 0;
                        if((position_finale - 1) >= 0)
                        {
                            if((casejoueur1[position_finale-1].textContent == 2) || (casejoueur1[position_finale-1].textContent == 3) || (casejoueur1[position_finale-1].textContent == 4))
                            {
                              scoreJoueur2.textContent = parseInt(scoreJoueur2.textContent) + parseInt(casejoueur1[position_finale-1].textContent);
                              casejoueur1[position_finale-1].textContent = 0;
                            }
                        }
                    }
        
                }
            }
        }
    }

}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if((le_connecte.textContent) == (adversaire1.textContent))
{
  caseJoueur1.forEach((btn) => btn.addEventListener('click', FaireUnePrise));

}


else if((le_connecte.textContent) == (adversaire2.textContent))
{
  caseJoueur2.forEach((btn) => btn.addEventListener('click', FaireUnePrise));

}




$(document).on('submit','#post-form',function(e){
   
    e.preventDefault();
    
    $.ajax({
      type:'POST',
      url:'/hello',
      data:{
          ptns1:$('#ptns1').val(),
          ptns2:$('#ptns2').val(),
          ptns3:$('#ptns3').val(),
          ptns4:$('#ptns4').val(),
          ptns5:$('#ptns5').val(),
          ptns6:$('#ptns6').val(),
          ptns7:$('#ptns7').val(),
          ptns8:$('#ptns8').val(),
          ptns9:$('#ptns9').val(),
          ptns10:$('#ptns10').val(),
          ptns11:$('#ptns11').val(),
          ptns12:$('#ptns12').val(),
          ptns13:$('#ptns13').val(),
          ptns14:$('#ptns14').val(),
          score1:$('#score1').val(),
          score2:$('#score2').val(),
        
        csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
      },

      success: function(data){
         alert(data)
         console.log("nous y sommes")
      }
    });

  });