<?php

namespace App\Enums;

enum OrderStatus: string
{
    case PENDING = "pending";
    case REQUESTED = "requested";
    case SENT = "sent";
    case RECEIVED = "received";
    case PROCESSING = "processing";
    case REPORTED = "reported";
    case SEMI_REPORTED = "semi reported";
}
