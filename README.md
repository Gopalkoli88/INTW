https://gopalkoli88-8776322.postman.co/workspace/Personal-Workspace~6b78428b-6e10-47de-b44f-ee2552469c3e/request/50809697-2425724e-26d1-4629-92ae-0447eaada3be?action=share&creator=50809697&ctx=documentation
<?php
// Database connection
$conn = mysqli_connect("localhost", "root", "", "hotel_db");

$msg = "";

// Insert data
if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $room_type = $_POST['room_type'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];

    if ($name=="" || $email=="" || $phone=="" || $room_type=="") {
        $msg = "❌ All fields are required!";
    } else {
        $sql = "INSERT INTO bookings
        (name,email,phone,checkin,checkout,room_type,adults,children)
        VALUES
        ('$name','$email','$phone','$checkin','$checkout','$room_type','$adults','$children')";

        mysqli_query($conn, $sql);
        $msg = "✅ Room booked successfully!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Hotel Room Booking</title>

    <style>
        body {
            font-family: Arial;
            background: #f2f2f2;
        }
        .container {
            width: 500px;
            background: white;
            padding: 20px;
            margin: 20px auto;
            border-radius: 8px;
        }
        input, select {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
        }
        input[type=submit], input[type=reset] {
            width: 48%;
            background: #007BFF;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        input[type=reset] {
            background: #6c757d;
        }
        table {
            width: 90%;
            margin: 20px auto;
            border-collapse: collapse;
            background: white;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: center;
        }
        th {
            background: #007BFF;
            color: white;
        }
        .msg {
            text-align: center;
            color: red;
        }
    </style>

    <script>
        function validateForm() {
            let name = document.forms["bookingForm"]["name"].value;
            let email = document.forms["bookingForm"]["email"].value;
            let phone = document.forms["bookingForm"]["phone"].value;
            let room = document.forms["bookingForm"]["room_type"].value;

            if (name=="" || email=="" || phone=="" || room=="") {
                alert("All fields must be filled!");
                return false;
            }
            return true;
        }
    </script>
</head>

<body>

<div class="container">
    <h2>Hotel Room Booking</h2>

    <p class="msg"><?php echo $msg; ?></p>

    <form name="bookingForm" method="post" onsubmit="return validateForm();">

        Name:
        <input type="text" name="name">

        Email:
        <input type="email" name="email">

        Phone:
        <input type="text" name="phone">

        Check-in:
        <input type="date" name="checkin">

        Check-out:
        <input type="date" name="checkout">

        Room Type:
        <select name="room_type">
            <option value="">Select</option>
            <option>Single</option>
            <option>Double</option>
            <option>Deluxe</option>
        </select>

        Adults:
        <input type="number" name="adults" value="1">

        Children:
        <input type="number" name="children" value="0">

        <br><br>
        <input type="submit" name="submit" value="Submit">
        <input type="reset" value="Reset">

    </form>
</div>

<h2 style="text-align:center;">Booked Rooms</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Room</th>
        <th>Check-in</th>
        <th>Check-out</th>
    </tr>

<?php
$result = mysqli_query($conn, "SELECT * FROM bookings ORDER BY id DESC");
while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['email']}</td>
        <td>{$row['phone']}</td>
        <td>{$row['room_type']}</td>
        <td>{$row['checkin']}</td>
        <td>{$row['checkout']}</td>
    </tr>";
}
?>

</table>

</body>
</html>
--------------------------------------------------------------------------------------------
