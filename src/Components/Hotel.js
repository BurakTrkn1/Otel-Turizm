import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../../src/App.css";
function Hotel() {
  const navigate = useNavigate();
  const Türkiye = () => {
    navigate("/Türkiye");
  };
  return (
    <div className="Hotel">
      <a href="/Türkiye">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png" />
      </a>
      <a href="/İsviçre">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC5CAMAAAA4cvuLAAAAn1BMVEXYJR7////bPzfaJCDXIBnjVE3UJyDcJBzWJhv+//zVDwDSGA7y2tjgkpPmsrHWFQbil4/59/XUQj3+/P7QLCX39/bQFQXilpP6///9/P/5+vTaPzrbVE7XQTbcPjXiHyPfOzrJMCjSJxLaFhfYjozQAgDbJBLUOz7t0tXy6OHy29TQRTvTQkX/8vnOSTnmtbDnq63fmo/jg3fgf4DiZWCnXx3dAAADOElEQVR4nO3dW1PaQBxA8SxJSeINECsRL9VSraK1N7//ZyuO1uKprHmAWWY4vzeV2dmcSfAh/0myk7Pzjp6dHndOsrOyLPSsKovT7LjMs1xPsk/ledYpukWlZ1nVyTplt8z0pMoLi7xiEbIIWYQsQhYhi5BFyCJkEbIIWYQsQhYhi5BFyCJkEbIIWYQsQhYhi5BFyCJkEbIIWYTSFnlnlCPJnlIWybsHFweLXRx0E2wqaZFefzgYDhYZjuv+doJdJS0yCuN6sRD6Wwl2lfYcCU1YrAmjjTtH+qGOFAlht5dgVxYhi5BFyCJkEbIIWYQsQhYhi5BFyCJkEbIIWYQsQhYhi5BFyCJkEbIIWYQsQhYhi5BFyCJkEbIIWYQsQhahxHNosSJN2D1MsCuL0GqKPK9Wzsz98uWn8snWu0V6rz7/5jpL3fejpRepsvzzZLuVy90mNqsYmi+X7RYqrpY4C7yCItnX6+lOKzfNUSTIUX1z3WqZ6fX+EgfGV1CkuB2HyODu3AhvrMfsFJldUu3WGd+uc5Esy/cH0Yth7osibvjOP+cXg+N8edtfQZFi/2PLI1mWwVpfNRb5n0XIImQRsghZhCxCFiGLkEXIImQRsghZhCxCFiGLkEXIImQRsghZhCxCFiGLUHE7K9Lqfm38RmcThu1u+659kfwufof7xexoop+s48MU/9J9u1vz+77343ZFHo85+te2y4zvJ8vb/gqKdDt73/dauW5iB10305br/Dhf73Mkqw63WrkcRb9H6rB72W6h3jKfwJhyMm9rFL0W6jDawOnN+DliEdq8CV9nnsEiZBGyCFmELEIWIYuQRcgiZBGyCFmELEIWIYuQRcgiZBGyCFmELEIWIYuQRcgiZBGyCFmELEIWIYuQRejxTaWxyd1646auJqMwPhou1GzeObL9MxzVdfOWp+nu/qYVmfyaxh4lN935fZVgV0nfnF4dxiV5dXrad8m/PETyLYl2lLhIqsOOSH2OrB+LkEXIImQRsghZhCxCFiGLkEXIImQRsghZhCxCFiGLkEXIImQRsghZhCxCFiGLkEXIImQRqsrq2CLzqnxW5GxSFfqrnF01Dx807+EPBmKc5/pmMpsAAAAASUVORK5CYII=" />
      </a>
      <a href="/Maldivler">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAk1BMVEW+ACcjnkb////BACWFQjIKqkgknEaRNjAUpkdQfz8coUZeczy5ACb+//4inkUAky72/PjP6tcTmj1YrGo7pljm9OrZ7t8AljUPmDq23cGu2blXsW+i0q5NrmdwuoPV69ve7+MyolCLyZyXMC1GiEBWfD1ntnqDxZTu+PHC48uWzqU5pFWz271CqF6l0rB9wI6fJyuZ4e8tAAAEiklEQVR4nO2dXXebOBCGI7p1u2kZQA0f/gLDdrFJTNr//+tqsNOmGXWzF5IymPe5yckNnPOc0WhmEPjmBgAAAAAAAAAAAAAAAAAAAAAAAAAAAADennfXhRUnH/66Jv6xoeTz1/fXxL9WnPxNi+vh9pMdJ7fqeoATDpxw4IQDJxw44cAJB044cMKBE850ndCIiytP0AnpgcXdQD3+Y9nMxJxQEVHfNquuytKBXZYsN01vV8qUnJCmfr+q4jB4TpzM1wlFqlymZx/h5U8QHB7XutB27zQVJ5rWy0PwkmyvIstC1FSc6GLdxcxIul/YTq8jU3BC+boLuZF7yt3cbwJO9MMmHnPHb5n12BdOihM1ASeUtymLkWBX2k6sz5DuRC9WPJEEKyoc3W9AuBNdJy9XTRDGjZPU+hPZToZ1w7JrtnWUW58Q7US3hnVT9e4yyRnJTvLSoCQh10oEOyFtUtLVTlPJiFwnesuUhEGmnEeJYCfUs/YmPC0c91Ei1wnphC+c1Hl6HRHqhPSGKzmsXVZqvxDqRJesLAnDxnFd8oRMJ5QbepzOSzJRQp2QfjSsHA+78BmZTnpemYT3nlaOUCf5kodJtbB5h/9EohPi1VoQlM5GSAyJTvTKECZeKpMzAp1Qbcgm3+btpNjzMEkf7F3/VQQ60RV38hjZu/6ryHNCX/jSidcel45AJ7p5041YSXQSddzJxmeYSHTCHwsH5byd0JYr8dfqjIhzor9xJztvrc6IOCeFoSXufO7EAp1oQ/+3mXeckDLMYfd+Zo5PSHOi6uylkTD0u+2Ic0J3fOoYf/G67Yhzoh7ghLHlJdvcnRg7wLk76bF2GMZ8Yuvi/w9xTrDvMKhmU7YwbOddnyjFxydeB9RKnhMy9Tv+HgGOSHNi7ItXc++LS+4km7kT05wtnXc+USoyFLLbec8eVWQaoMx7Rq2Khjs5zjxOTF1g6nVwL8+JYdIWxF4rWYFOcsMx0KPPqk2gE+q5k11t7/qvItCJMh2h9rnziHRiOJRTuX216zckOiFleIze+pMi0Ynx9FYy7zhRZBpA+tuORToxHi7I8lmfLT/VKLxuC7xN24Q60WtDgW/5Myd/RKgTVdzzQOk8HS+Q6oQ0T7NhOev3vIbXRg0Pjv28/CbWiSoMe0/lZWYg14kxpSQ+3lgR7IRMrzY9engpULCTkxWTlMi5FNFOVPQmkSLbCRGfuYVH1x2ybCenIn/PC9qqdrslS3eiinbHpOxap/2geCdK1zypxI122BDKd6KoKHmXnKzdZZUJOBlCZcOyyqG5dbWAJuHktCkvNi96wjBIm9pNVTsRJ6c++e6+usj4lWv3d7mDJTQVJydyalfZxcjlA7JBumxVns/0+7EDdNps2ma5i59/aTg8LBvLx1Om5GRA57rels1qmZzpjpumfJi3kwHSRZ5HF/Lc+hdCp+jENXDCgRMOnHDghAMnHDjhwAkHTjhwwoETji0n1/S7tGTHydf3H68HO79ffPP9wzXx3YqTt/4Bc8tYcQIAAAAAAAAAAAAAAAAAAAAAAAAAAMCf+AHjgsnWqdIVWAAAAABJRU5ErkJggg==" />
      </a>

      <a href="/Brezilya">
        <img src="https://st.depositphotos.com/55979218/53029/i/600/depositphotos_530296866-stock-photo-flag-brazil-template-design.jpg" />
      </a>
      <a href="/Bahamalar">
        <img src="https://media.istockphoto.com/id/690031924/tr/vekt%C3%B6r/bahamalar-bayra%C4%9F%C4%B1.jpg?s=612x612&w=0&k=20&c=mOz64npkC5Bk1HIq32aArqhsOTHtyKBTOw_YKl6cBZk=" />
      </a>
      <a href="/Yunanistan">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAARVBMVEUNXq////8AWK0AU6vI1unH0+Z3msoGXK6Bnstli8IXZbIAT6k0cbfq8Pcxb7cAVqwqa7XQ3Oxfh8GittiDos4AQqV0l8nP5BA+AAAB1ElEQVR4nO3dyW7UQBRAUZMEDGEIQ+D/P5V1uI5UKEp5yDn7WvRV2d16ZbmXZczNp3cb7tfB5ZekSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUi9rst6eyZQm6/cfdycyp8mXrcWHNafJt9kf60XmNLFPNNHkKU1Kk9KkNClNSpPSpPy2L/ukNClNSpO6aJObMbc/N1c/DC1+ONn3zsdBv7ZWPw4ufnx/JsuU8l9/7z2L/x+TmnwevW8dgialSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmNafJuWaP5vaxrGOeO98Zc7Img97UmZcmMaeJa6dN7BNNNHnK/aTsk7JPSpNy7ZQmpUm5n5R9UvZJ2SelSY02uf9wJlOaLOvgJPwY5jS5Jk1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9Kk3lSTwdnTM8+Cvuq8ay/L4Izyz+Y7HF51LLqbOc9Rn4smpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVLL3i+ROKC9j1IAAAAA4BL2HvQd0LL3n6wdkLl9aVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmtRyx7/M7WvvoxQAAAAA4Jr+Ar/pk4Dl9BgCAAAAAElFTkSuQmCC" />
      </a>
    </div>
  );
}

export default Hotel;
