document.getElementById('DateFinder').addEventListener('click', function() {

 var today = new Date();
            var DateStr = today.toLocaleDateString('tr-TR');
            document.getElementById('ShowDate').textContent = DateStr;
});  
 
 document.getElementById('DateClear').addEventListener('click', function() {
            document.getElementById('ShowDate').textContent = ''; 
        });      